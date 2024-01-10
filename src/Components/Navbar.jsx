
import styled from 'styled-components'


const Navbar = ({togglemode, Checked}) => {

    
  return (
    
      <Navbars isChecked={Checked}>
        <div className='logo'>
            <img src="imgs/textutils-logo.png" height='40px ' width='40px' alt="" />
            <h3>TextUtils</h3>   
        </div>
        <Switch className="form-check form-switch">
            <input className="form-check-input" onClick={togglemode} type="checkbox" role="switch"  />
            <label className="form-check-label" > {!Checked ? "Dark":"Light"}Mode</label>
            
        </Switch>
      </Navbars>

  )
}

export default Navbar

const Navbars = styled.nav`
    width: 1280px;
    position: fixed;
    top: 0;
    background-color:${(props) => props.isChecked? "#e1e7d8;": "#484747ad"}; 
    color: ${(props) => !props.isChecked? "white": "black"}; 
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    
    
    .logo{
        display: flex; 
        align-items: center;
        gap: 6px;
    }
    .logo h3{
        font-size: 25px;
        font-weight: 600;
        margin: 0;
    }
    

`
const Switch = styled.div`
    input{
        font-size: 22px
    }
    label{
        font-size:25px;
        font-weight: 500;
    }
`

