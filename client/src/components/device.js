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
        <li key={led.position} className="leds" style={{backgroundColor: led.colour, boxShadow: `0px 0px 10px 4px ${led.colour}`}}>
        </li>
      )
    })


    return (

      <div id="base" className="base">

      <div id="matrix" className="matrix">
      <ul className="LEDs">
      {led_el}
      </ul>
      </div>

      <div>
      </div>

      </div>



    )
  }
}



export default Device;
