import React from 'react';
import Device from "../components/device"

class MainBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      flags:[],
      flagToDisplay: {},
      selectedFlag: {}
    }
    this.handleFlagSelect = this.handleFlagSelect.bind(this);
    this.handleChangeFlagButton = this.handleChangeFlagButton.bind(this);
    console.log(this.state);

  }

componentDidMount(){
  const url = '/api/flags';
  fetch(url).then(res => res.json()).then(flags => {
    this.setState({
       flags: flags,
       
     })
   });
}

 handleFlagSelect(event){


  event.preventDefault()
  console.log(event.target.value);
  const index = event.target.value;
  const selected = this.state.flags[index];
  this.setState({selectedFlag: selected})
  console.log(this.state);


}

 handleChangeFlagButton(event){

  event.preventDefault()
  console.log("selectedflag",this.state.selectedFlag);
  const index = this.state.selectedFlag.id;
  const indexnew = index + 1;
  const selected = this.state.flags[indexnew];
  this.setState({selectedFlag: selected})
  console.log("selectedflagafterchange",this.state.selectedFlag);


}



  render(){
    const elements = [];

    //options for dropdown contains flag names right now, can later change to celtic etc
    const options = this.state.flags.map((flag, index) => {
      return <option key={index} value={index}> Flag: {flag.name} </option>});

      //we need to use the selector to select a flag and then get its key and
      //then we can use that when looping over the flags array to pick the matching
      //flag and then pass it over to device.js so that we can map over the leds

    this.state.flags.forEach((flag) => {
      elements.push(<Device flagToDisplay={this.state.flagToDisplay} name={flag.name} key={flag.id} id={flag.id} colour={flag.flagLEDs[0].colour}/>)
    })
    return (
      <div className="MainBox">
      <select name="flagsDropDown" onChange={this.handleFlagSelect}>
      {options}
      </select>
      <button type="button"> On/Off </button>
      <button type="button" onClick={this.handleChangeFlagButton} > change flag </button>
      <Device flag={this.state.selectedFlag}/>
      {elements}

      </div>
    )

  }

}

export default MainBox;
