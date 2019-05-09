import React from 'react';
import './device.css';


class Device extends React.Component{



  render(){
    console.log(this);

    if(!this.props.flags && !this.props.id ){
      return null;
    }

    const led_el = this.props.flags.map((flag) => {
      return(
        <li key={flag.id} className="component-item" style={{backgroundColor: flag.colour}}>
        </li>
      )
    })

    return (
      <div>

      <div>
      <p>{this.props.id}</p>
      <p>{this.props.name}</p>
      <p>{this.props.colour}</p>
      <button type="button"> change flag </button>
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
