import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onResetAll = this.onResetAll.bind(this);


  }
  onSetColor(params){
    this.setState({
      color: params
    });
  }
  onChangeSize(value){
    if(this.state.fontSize + value >= 8 && 
      this.state.fontSize + value <= 36){
      this.setState({
        fontSize: this.state.fontSize + value
      })
    }
  }
  onResetAll(value){
    if(value){
      this.setState({
        color: 'red',
        fontSize: 15
      })
    }
  }
  render(){
    return (
      <div className="App">
        <div className = "container">
          <div className = "customs">
            <ColorPicker color = {this.state.color} 
            onReceiverColor = {this.onSetColor} />
            <SizeSetting size = {this.state.fontSize}
              onChangeSize = {this.onChangeSize}
            />
            
          </div>
          <div className = "reset_btn">
          <Reset onResetAll = {this.onResetAll}/>
          </div>
            <Result color = {this.state.color}
              fontSize = {this.state.fontSize}
            />
        </div>
      
      </div>
    );
  }
}

export default App;
