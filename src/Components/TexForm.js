import React,{useState} from "react";



export default function TexForm(props) {
   const handelUpClick=() =>{
     let newText = text.toUpperCase();
     setText(newText)
    }
    const handelOnChange=(event) =>{ 
        setText(event.target.value);
       }
    
    const [text ,setText]= useState('Enter text here ')
    
    function countWords(str) {
      if(str.length == 0) return 0;
    return str.trim().split(/\s+/).length;
  }
  function countCharacters(str) {
    if(str.length == 0) return 0;
    return str.trim().split(/\s+/).join("").length;
  }
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control"id="myBox" value={text} onChange={handelOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handelUpClick}>Convert to Uppercase </button>
    </div>
    <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{countWords(text)} Words {countCharacters(text)}</p>
        <p>{0.008*countWords(text)} Minutes to read</p>
    </div>
    
    </>
  );
}
