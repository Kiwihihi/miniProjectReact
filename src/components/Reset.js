import React, { Component } from 'react';

class Reset extends Component{
    ResetAll(value){
        this.props.onResetAll(value);
    }
    render(){
        return (
            <button className = "btn reset"
                onClick = {() => this.ResetAll(true)}
            >Reset</button>
        );
    }
}


export default Reset;
