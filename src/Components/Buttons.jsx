import React from 'react'
import styled from 'styled-components'

const Buttons = ({text ,Click }) => {
  
   
  return (
    <ButtonFeild>
      <button onClick={Click} >{text}</button>
    </ButtonFeild>
  )
}

export default Buttons

const ButtonFeild = styled.div`
    button{
        all: unset;
        margin-top: 10px;
        padding: 10px 10px;
        background-color: #3a90e1;
        border-radius:10px;
        color: white;
        cursor: pointer;
    }
`
