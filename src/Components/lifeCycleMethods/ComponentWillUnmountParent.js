import React, { Component } from "react";
import ComponentWillUnmountChild from "./ComponentWillUnmountChild";

class ComponentWillUnmountParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      show:!prevState.show
    }));
  };

  render() {
    return (
      <div>
        {this.state.show ?<ComponentWillUnmountChild />:"Component is removed"}
        <button onClick={this.clickHandler}>Click For Change</button>
      </div>
    );
  }
}

export default ComponentWillUnmountParent;
