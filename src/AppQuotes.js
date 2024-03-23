import './App.css';
import { useState } from 'react';

function Button(props){
    const handleClick = () => {
        props.command();
    }
    return(
        <button style={{width: "120px", height:"50px"}} onClick={handleClick}>{props.text}</button>
    );
}

function DisplayQuote(props){
    return(
        <p>{props.text}</p>
    );
}

function AppQuotes(){
    const quotes = ["Quote1", "Quote2", "Quote3", "Quote4", "Quote5", "Quote6", "Quote7", "Quote8", "Quote9", "Quote10"];
    const [quote, setQuote] = useState(quotes[0]);
    const handleClick = () => {
        setQuote(quotes[Math.floor(Math.random()*9)]);
    }
    return(
        <>
        <p>Task3</p>
        <Button command={handleClick} text="Quote of the Day"></Button>
        <DisplayQuote text={quote}></DisplayQuote>
        </>
    );
}

export default AppQuotes;