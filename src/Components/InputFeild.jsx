import React, { useState } from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'
import copy from "copy-to-clipboard";


const InputFeild = ({Checked,SetShowAlert,SetShowAlertText, ShowAlert}) => {
    const [Text,SetText] = useState("");
    const handleUpClicked =()=> {
        if(Text ===""){
          alert("Warning!!! Enter a text in TextArea to Convert in UpperCase",)
        }else{
          const newtext = Text.toUpperCase();
          SetText(newtext)
          SetShowAlert(true);
          SetShowAlertText("Converted to UpperCase SuccessFully")
        }
        setTimeout(() => {
            SetShowAlert(false);
          }, 1500);
      }
      const handleLoClicked =()=> {
        if(Text ===""){
          alert("Warning!!! Enter a text in TextArea to Convert in LowerCase",)
        }else{
          const newtext = Text.toLowerCase();
          SetText(newtext)
          SetShowAlert(true);
          SetShowAlertText("Converted to LowerCase SuccessFully")
        }
        setTimeout(() => {
            SetShowAlert(false);
          }, 1500);
      }
      const handleCLClicked =()=> {
        if(Text ===""){
          alert("Warning!!! Enter a text in TextArea to Clear",)
        }else{
          const newtext = "";
          SetText(newtext)
          SetShowAlert(true);
          SetShowAlertText("Text Cleared")
        }
        setTimeout(() => {
            SetShowAlert(false);
          }, 1500);
      }
      const copyToClipboard = () => {
        if(Text ===""){
            alert("Warning!!! Enter a text in TextArea to Copy",)
          }else{
            copy(Text);
            SetShowAlert(true);
            SetShowAlertText(`You have copied "${Text}"`)
            }
            setTimeout(() => {
                SetShowAlert(false);
              }, 1500);
    };
      const handleOnChange =(event)=> {
        SetText(event.target.value)
      }
  return (
    <>
    <Inputsession isAlert={ShowAlert} isChecked={Checked} className='inputfeild'>
        <h1>Enter the text to anlayaze</h1>
        <textarea name="text" value={Text} cols="30" onChange={handleOnChange} rows="6"></textarea>
    <div className='buttonFeild'>
        <Buttons Click={handleUpClicked} text="Convert to UpperCase" />
        <Buttons Click={handleLoClicked} text="Convert to LowerCase" />
        <Buttons Click={handleCLClicked} text="Clear Text" />
        <Buttons Click={copyToClipboard} text="Copy Text" />
    </div>

    <div className='preview'>
    <h4>Preview</h4>
    <p>{Text.length>0 ? Text:"Enter the text to preview "}</p>
  </div>
    </Inputsession>
    </>
    
  )
}

export default InputFeild

const Inputsession= styled.div`
    width: 1000px;
    margin: 0 auto;
    margin-top: ${(props) => !props.isAlert? "100px": "30px"}; 
    
    
    h1,.preview h4 ,p{
        color: ${(props) => props.isChecked? "black": "white"}; 
        margin-bottom: 10px;
    }
    textarea{
        all: unset;
        width: 1000px;
        margin: 0 auto;
        padding: 20px 30px;
        font-size: 24px;
        font-weight: 600;
        border-radius: 5px;
        background-color: ${(props) => !props.isChecked? "#323131": ""}; 
        color: ${(props) => props.isChecked? "black": "white"}; 
        border:${(props) => props.isChecked? "2px solid black;": "2px solid white;"};
        
        
    }
    .buttonFeild{
        display: flex;
        gap: 20px;
    }
    .preview{
        margin-top: 20px;
    }
`