import React, { Component } from 'react';

class SizeSetting extends Component{
    changeSize(value){
        this.props.onChangeSize(value)
    }
    render(){
        return (
            <div className = "size">
            <span className = "size_text">Size: {this.props.size} </span>
            <button className = "btn decrease"
                onClick = { () => this.changeSize(-1)}
            >-</button>
            <button className = "btn increase"
                onClick = { () => this.changeSize(1)}
            >+</button>

          </div>
        );
    }
}


export default SizeSetting;
