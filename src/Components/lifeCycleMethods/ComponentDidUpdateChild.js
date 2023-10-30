import React, { Component } from "react";

class ComponentWillUnmountChild extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
    return <div>componentWillUnmount Child Component</div>;
  }
}

export default ComponentWillUnmountChild;
