import React, { Component } from 'react';

class StateExample extends Component {
 constructor(props) {
    super(props);
    this.state = {name: "Raja"};
    console.log("constructor is called");
  }
  componentWillMount(){
    console.log("componentWillMount is called");
  }

  componentDidMount(){
    console.log("componentDidMount is called");
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps is called");
  }

  shouldComponentUpdate(){
   return true;
  }

  componentWillUpdate(){
    console.log("componentWillUpdate is called");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate is called");
  }

  render() {
    console.log("render is called");
    return (
      
      <React.Fragment>
        {this.state.name}
        <input type="text" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
      </React.Fragment>



    );
  }
}

export default StateExample;
