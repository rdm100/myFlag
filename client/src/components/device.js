import React from 'react';
import './device.css';

class Device extends React.Component{

  render(){
    console.log(this.props.id)
    return (
      <div>
        <p>{this.props.id}</p>
      </div>
    )
  }

}

export default Device;
