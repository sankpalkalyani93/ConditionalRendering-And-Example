import React from "react";
import { Component } from "react";

/*//function EvenOdd({num}){
function EvenOdd(props){

    let num = props.num;
    return (
        <div>
            {num % 2 === 0 && <p>{num} is even number</p>}
            {num % 2 !== 0 && <p>{num} is odd number</p>}
        </div>
    );
}*/

class EvenOdd extends Component{
    render(){
        
        const num = this.props;

        return(
            <div>
                {num % 2 === 0 && <p>{num} is even number</p>}
                {num % 2 !== 0 && <p>{num} is odd number</p>}
            </div>
        );
    }
}

export default EvenOdd;