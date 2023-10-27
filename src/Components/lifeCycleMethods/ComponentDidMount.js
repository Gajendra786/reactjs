import React, { Component } from "react";
import axios from "axios";

class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      error: "",
      loading: true,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        this.setState({
            data:response.data,
            loading:false
        })
      })
      .catch(error => {
        this.setState({
            error:error.message,
            loading:false
        })
      });
  }
  render() {
    const { data, error, loading } = this.state;
    if (loading) {
      return <div>loading.....</div>;
    }
    if (error) {
      return <div>Error.....</div>;
    }

    return <div>{JSON.stringify(data)}</div>;
  }
}

export default ComponentDidMount;
