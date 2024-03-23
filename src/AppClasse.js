import './App.css';
import { useState } from 'react';
import React from 'react';

class Button extends React.Component{
  render(){
    const handleClick = () => {
      this.props.command(this.props.bkColor);
    }
    return(
      <button style={{backgroundColor: this.props.bkColor, height: "30px", width: "100px" , textAlign: "center"}} onClick={handleClick}>{this.props.btnText}</button>
    );
  }
}

class DisplayText extends React.Component{
  render(){
    return(
      <div style={{width: "350px", textWrap: "wrap", backgroundColor: this.props.bkColor ,paddingLeft: "10px"}}>{this.props.text}</div>
    );
  }
}

class AppClasse extends React.Component {
  constructor(props){
    super(props);
    this.state = {textColor: "red" };
  }
  render(){
    const handleClick = (color) => {
      this.setState({textColor: color});
    }
    return(
      <>
      <p>Task2</p>
    <Button command={handleClick} bkColor = "red" btnText = "Red"></Button>
    <Button command={handleClick} bkColor = "green" btnText = "Green"></Button>
    <Button command={handleClick} bkColor = "yellow" btnText = "Yellow"></Button>
    <DisplayText bkColor={this.state.textColor} text="Sample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample Text"></DisplayText>
    </>
    );
  }
}

export default AppClasse;