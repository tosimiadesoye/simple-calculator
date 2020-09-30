import React from 'react';
import './input.css';

export class Input extends React.Component{
    render () {
        return (
        <div className='input'>{this.props.input}</div>
        )
    }
}

