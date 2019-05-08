import React from 'react';
import './device.css';

class Device extends React.Component{

  render(){
    return (
      <div>
        <p>{this.props.id}</p>
        <p>{this.props.name}</p>
        <p>{this.props.colour}</p>
      </div>
    )
  }

}

export default Device;
