import React, {Component} from "react";

class ConstructorAndRender extends Component{
    constructor(){
        console.log("constructor")
        super()
    }
    render() {
        console.log("render")
      return (
        <div>
          
        </div>
      )
    }
}

export default ConstructorAndRender