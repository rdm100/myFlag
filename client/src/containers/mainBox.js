import React, {Component} from 'react';

class MainBox extends Component{

  constructor(props){
    super(props);
    this.state =  {
      flags:[],
      flagToDisplay: {}
    }
  }

  render(){
    return (
      <div>
        <p>hello world</p>
      </div>
    )
  }

}

export default MainBox;
