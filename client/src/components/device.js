import React from 'react';

class Device extends React.Component{

  render(){
    return (
      <div className="">
        <p>{this.props.flagToDisplay}</p>
      </div>
    )
  }
}

export default Device;
