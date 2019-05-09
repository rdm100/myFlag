import React from 'react';
import Device from "../components/device"

class MainBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      flags:[],
      flagToDisplay: {}
    }
    console.log(this.props);

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

    this.state.flags.forEach((flag) => {
      elements.push(<Device name={flag.name} key={flag.id} id={flag.id} colour={flag.flagLEDs[0].colour}/>)

    })
    return (
      <div className="MainBox">
      <select name="flagsDropDown">
      {options}
      </select>
      <Device/>
      </div>
    )

  }

}

export default MainBox;
