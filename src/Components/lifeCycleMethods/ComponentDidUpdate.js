import { count } from "ramda";
import React, { Component } from "react";

class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count:0
    }
    // console.log("constructor")
  }


  incrementHandler = ()=>{
    this.setState((prevState)=>({
        count:prevState.count+1
    }))
  }

  decrementHandler = ()=>{
    this.setState((prevState)=>({
        count:prevState.count-1
    }))
  }


  componentDidUpdate(prevProps,prevState) {
    console.log(prevState.count,this.state.count)
    // if(prevState.count ===3 && this.state.count === 4){
    //     console.log(`componentDidUpdate",previous:=>${prevState.count},current:=>${this.state.count}`)
    // }
  }

  render() {
    // console.log("render")
    return (
        <>
    <div onClick={this.incrementHandler}>increment</div>
    <div onClick={this.decrementHandler}>decrement</div>
    </>
    );
  }
}

export default ComponentDidUpdate;
