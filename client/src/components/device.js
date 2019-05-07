import React from 'react';

class Device extends React.Component{

  render(){
    return (
      <div className="">
        <p>{this.props.flag.toString()}</p>
      </div>
    )
  }
}

export default Device;
