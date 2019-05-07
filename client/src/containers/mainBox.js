import React, {Component} from 'react';
import Device from "../components/device"

class MainBox extends Component{

  constructor(props){
    super(props);
    this.state =  {
      flags:[],
      flagToDisplay: {}
    }
  }

componentDidMount(){
  const url = '/api/flags';
  fetch(url).then(res => res.json()).then(flags =>
    this.setState({flags: flags,
    flagToDisplay: flags[0].leds[0]}));
}

  render(){
    return (
      <div>
        <Device elements={this.state.flagToDisplay}/>
      </div>
    )
  }

}

export default MainBox;
