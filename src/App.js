import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Button(props){
  const handleClick = () => {
    props.command(props.bkColor);
  }
  return(
    <button style={{backgroundColor: props.bkColor, height: "30px", width: "100px" , textAlign: "center"}} onClick={handleClick}>{props.btnText}</button>
  );
}

function DisplayText(props) {
  return(
    <div style={{width: "350px", textWrap: "wrap", backgroundColor: props.bkColor ,paddingLeft: "10px"}}>{props.text}</div>
  );
}

function App() {
  const [textColor, setTextColor] = useState("Red");
  const handleClick = (color) => {
    setTextColor(color);
  }
  return (
    <>
    <p>Task1</p>
      <Button command={handleClick} bkColor="red" btnText = "Red"></Button>
      <Button command={handleClick} bkColor="green" btnText = "Green"></Button>
      <Button command={handleClick} bkColor="yellow" btnText = "Yellow"></Button>
      <DisplayText bkColor={textColor} text = "Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text "></DisplayText>

    </>
  );
}

export default App;


