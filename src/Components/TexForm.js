import React,{useState} from "react";



export default function TexForm(props) {
   const handelUpClick=() =>{
     let newText = text.toUpperCase();
     setText(newText)
     props.showAlert("Converted to uppercase","success")
    }
    const handelLoClick=() =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase","success")
     }
     const handelClearClick=() =>{
      let newText = '';
      setText(newText)
      props.showAlert("Text cleared ","success")
     }

    const handelOnChange=(event) =>{ 
        setText(event.target.value);
       }
       const handelCopy= () =>{
         var text = document.getElementById("myBox");
         text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert("copy to clipboard","success") 
        }
        const handelExtraSpaces = () => {
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "))
          props.showAlert("Extra space is removed","success") 
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
    <div className="container" style ={{color:props.mode=== 'dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" value={text} onChange={handelOnChange} style ={{background:props.mode=== 'dark'?'grey':'white',color:props.mode=== 'dark'?'white':'#042743'}}  rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to Uppercase </button>
      <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert to Lowercase </button>
      <button className="btn btn-primary mx-2" onClick={handelClearClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handelCopy}>Copy text</button>
      <button className="btn btn-primary mx-2" onClick={handelExtraSpaces}>Remove  Extra Spaces</button>



    </div>
    <div className="container my-2" style ={{color:props.mode=== 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{countWords(text)} Words {countCharacters(text)} Characters</p>
        <p>{0.008*countWords(text)} Minutes to read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
    </div>
    
    </>
  );
}
