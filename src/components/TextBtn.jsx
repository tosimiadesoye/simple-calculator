import React from 'react';
import './button.css'

const isOperator = val => {
    return !isNaN(val) ||val ===  "." || val === "=";
}

 export class Button extends React.Component{
    render() {
        return (
        <div className={`button ${isOperator(this.props.children)? null : 'operator'}`} 
            onClick = {() => this.props.handleClick(this.props.children)}
            >
              {this.props.children}
        </div>
        )
    }
}
