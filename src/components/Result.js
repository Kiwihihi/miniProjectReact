import React, { Component } from 'react';

class Result extends Component{
    setStyle(){
        return {
           color: this.props.color,
           borderColor: this.props.color,
            fontSize: this.props.fontSize
        }
    }
    setColor(){
        return {
            color: this.props.color,
        }
    }
    render(){
        return (
            <div className = "result">
                <label className = "label">Color: <span style = {this.setColor()}> {this.props.color}</span></label>
                <input className = "input" type = "text" 
                placeholder = "Nhập nội dung"
                style = {this.setStyle()}
           
                ></input>
            </div>        
        );
    }
}


export default Result;
