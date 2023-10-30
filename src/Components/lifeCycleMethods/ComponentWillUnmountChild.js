import React, {Component} from "react";

class ComponentDidUpdateChild extends Component{
    constructor(pros){
        super(pros)
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.count <4){
            console.log("componentDidUpdate with previos value",prevProps.count)
            console.log("componentDidUpdate with current value",this.props.count)
        }
    }

    render(){
        return(
            <div>
                {this.props.count}
            </div>
        )
    }
}

export default ComponentDidUpdateChild