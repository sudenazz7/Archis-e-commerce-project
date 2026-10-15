import React, { useState } from 'react';
import { CiLight, CiShoppingBasket } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import "../css/Header.css";


function Header() {

    const [theme,setTheme] = useState(false); 

    
const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
        root.style.backgroundColor = "#fff";
        root.style.color = "#000";
    } else {
        root.style.backgroundColor = "#000";
        root.style.color = "#fff";
    }

    setTheme(!theme);
};



  return (
    <div style={{display:'flex' , flexDirection:'row' , alignItems:'center', justifyContent: 'space-between'  }} >
        <div className='flex-row' >
            <img className='logo' src="./src/images/logo.png" alt="" />
            <p className='logo-text' >Qeysi</p>
        </div>

        <div>

            <div className='flex-row' >
            <input className='search-input' type="text" placeholder='Ürün ara'/>

            <div>
                {theme ?  (<CiLight className='icon' onClick={changeTheme}/>) : (<IoIosMoon className='icon' onClick={changeTheme}/>  ) }
                <CiShoppingBasket  className='icon'/>
            </div>

            
            </div>
           
        </div>

    </div>
  )
}

export default Header