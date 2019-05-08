import React from 'react';
import './device.css';

class Device extends React.Component{

  render(){

    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }

}

export default Device;
