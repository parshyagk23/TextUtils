import React from 'react'
import styled from 'styled-components'

const ShowALert = ({ShowAlertText ,Checked}) => {
  return (
    <ShowAlerts isChecked={Checked}>
        <h2>{ShowAlertText}</h2>
    </ShowAlerts>
  )
}

export default ShowALert

const ShowAlerts =styled.div`
    margin-top: 72px;
    h2{
        color: ${(props) => props.isChecked? "black": "white"}; 
        font-size: 25px;
        font-weight: 500;
        margin: 0;
    }
    width: 1280px;
    padding: 6px 10px;
    border: ${(props) => props.isChecked? "2px solid black": "2px solid white"}; 
    background-color: #12db345c;

`