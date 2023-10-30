import React, { Component } from "react";
import ComponentDidUpdateChild from "./ComponentDidUpdateChild";

class ComponentDidUpdateParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <ComponentDidUpdateChild count={this.state.count} />
        <button onClick={this.clickHandler}>Click For Change</button>
      </div>
    );
  }
}

export default ComponentDidUpdateParent;
