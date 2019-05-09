import React from 'react';
import Device from "../components/device"

class MainBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      flags:[],
      flagToDisplay: {}
    }
    console.log(this.state);

  }

componentDidMount(){
  const url = '/api/flags';
  fetch(url).then(res => res.json()).then(flags => {
    this.setState({
       flags: flags
     })
   });
}



  render(){
    const elements = [];

    //options for dropdown contains flag names right now, can later change to celtic etc
    const options = this.state.flags.map((flag, index) => {
      return <option key={index} value={flag}> Flag: {flag.name} </option>});

      //we need to use the selector to select a flag and then get its key and
      //then we can use that when looping over the flags array to pick the matching
      //flag and then pass it over to device.js so that we can map over the leds 

    this.state.flags.forEach((flag) => {
      elements.push(<Device flagToDisplay={this.state.flagToDisplay} name={flag.name} key={flag.id} id={flag.id} colour={flag.flagLEDs[0].colour}/>)
    })
    return (
      <div className="MainBox">
      <select name="flagsDropDown">
      {options}
      </select>
      <Device/>
      {elements}

      </div>
    )

  }

}

export default MainBox;
