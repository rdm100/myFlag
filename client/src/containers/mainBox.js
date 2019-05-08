import React from 'react';
import Device from "../components/device"

class MainBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      flags:[],
      flagToDisplay: {}
    }
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
    this.state.flags.forEach((flag) => {
      elements.push(<Device name={flag.name} id={flag.id} colour={flag.flagLEDs[0].colour}/>)
    })
    return (
      <div>
        {elements}
      </div>
    )
  }

}

export default MainBox;
