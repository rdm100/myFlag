import React from 'react';
import './device.css';


class Device extends React.Component{





  render(){

    if(!this.props.flag && !this.props.id ){
      return null;
    }
    if(!this.props.flag){
      return null;
    }

    if(!this.props.flag.flagLEDs){
      return null;
    }

    if(this.props.flag){

  }

  //map over the flags array and then map over each

    const led_el = this.props.flag.flagLEDs.map((led) => {
      return(
        <li key={led.position} className="component-item" style={{backgroundColor: led.colour}}>
        </li>
      )
    })


    return (
      <div>

      <div>
      <p>{this.props.flag.id}</p>
      <p>{this.props.flag.name}</p>
      <p>{this.props.flag.colour}</p>
      </div>


      <div className="LEDsGrid">
      <ul className="LEDs">
      {led_el}
      </ul>
      </div>
      </div>
    )
  }
}



export default Device;
