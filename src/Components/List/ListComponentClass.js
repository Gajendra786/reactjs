import React, { Component } from "react";

class ListComponent extends Component {
  constructor() {
    super();
    this.state = {
      jsonData: [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Smith", age: 25 },
        { id: 3, name: "Bob Johnson", age: 35 },
      ],
      count: 0,
    };
  }
  clickHandler = () => {
    this.setState((prevState) => ({
      jsonData: [...prevState.jsonData, { id: 4, name: "John Doe", age: 30 }],
    }));
  };
  render() {
    return (
      <div>
        <h2 onClick={this.clickHandler}>Data Component-{this.state.count}</h2>
        <ul>
          {this.state.jsonData.map((el, i) => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListComponent;
