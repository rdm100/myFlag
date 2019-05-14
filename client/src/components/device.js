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
        <li key={led.position} className="leds" style={{backgroundColor: led.colour, boxShadow: `0px 0px 15px 5px ${led.colour}`}}>
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

      <h1 >Led Display</h1>
      <div id="base" class="base">
      <div id="matrix" class="matrix">
      <ul >
            {led_el}
      </ul>

      </div>
      <button >Get coordinates</button>
      <button >Left</button>
      <button >Right</button>
      <button >Stop</button>
      <button >Clear</button>
      <button >fill</button>
      <div id="demo"></div>
      </div>

      </div>
      </div>


    )
  }
}



export default Device;
