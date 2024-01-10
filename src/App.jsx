import Navbar from "./Components/Navbar"
import ShowALert from "./Components/ShowALert";
import InputFeild from "./Components/inputFeild"
import  { useState } from 'react'
function App() {
  const [Checked ,SetChecked] =useState(true);
  const [ShowAlert,SetShowAlert]= useState(false);
  const [ShowAlertText,SetShowAlertText]= useState("");
  const togglemode =()=>{
      SetChecked((prev) => !prev);
      Checked? document.body.style.backgroundColor='#323131':document.body.style.backgroundColor='white';
  }

  return (
    <>
      <Navbar togglemode={togglemode} Checked={Checked} />
     
      {ShowAlert ?  <ShowALert  ShowAlertText={ShowAlertText} Checked={Checked} />: "" }
      
      <InputFeild Checked={Checked} ShowAlert={ShowAlert} SetShowAlert={SetShowAlert} SetShowAlertText={SetShowAlertText} />

    </>
  )
}

export default App
