import React, { Component } from 'react';

class ColorPicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', 'black', 'gray']
    }
 
  }
  showColor(color){
    return {
      backgroundColor : color,
    }
  }
  setActiveColor(color){
    this.props.onReceiverColor(color);
  }

    render(){
      var elmColors = this.state.colors.map((color, index) => 
        <div key = {index} 
          style = {this.showColor(color)}
          className = {this.props.color === color ? 'active' : ''}
          onClick = {() => this.setActiveColor(color)}
        ></div>
          );
        return (
            <div className = "color_picker">
            <div className = "heading">
              <span>Color Piker</span>
            </div>
              <div className = "list">
                {elmColors}
              </div>
          </div>
        );
    }
}


export default ColorPicker;
