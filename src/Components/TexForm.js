import React,{useState} from "react";



export default function TexForm(props) {
   const handelUpClick=() =>{
     let newText = text.toUpperCase();
     setText(newText)
    }
    const handelLoClick=() =>{
      let newText = text.toLowerCase();
      setText(newText)
     }
     const handelClearClick=() =>{
      let newText = '';
      setText(newText)
     }

    const handelOnChange=(event) =>{ 
        setText(event.target.value);
       }
       const handelCopy= () =>{
         var text = document.getElementById("myBox");
         text.select();
        navigator.clipboard.writeText(text.value);  
        }
    
    const [text ,setText]= useState('')
    
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
      <textarea className="form-control" id="myBox" value={text} onChange={handelOnChange}  rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to Uppercase </button>
      <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert to Lowercase </button>
      <button className="btn btn-primary mx-2" onClick={handelClearClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handelCopy}>Copy text</button>


    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{countWords(text)} Words {countCharacters(text)} Characters</p>
        <p>{0.008*countWords(text)} Minutes to read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    
    </>
  );
}
