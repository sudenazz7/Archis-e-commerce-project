import Badge from '@mui/material/Badge';
import React, { useState } from 'react';
import { CiLight, CiShoppingBasket } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../css/Header.css";
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {

    const [theme,setTheme] = useState(false); 
    const navigate = useNavigate ();
    const dispatch = useDispatch();

    const {products} = useSelector ((store) => store.basket)

    
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
        <div className='flex-row' onClick={ ()=> navigate("/") } >
            <img className='logo' src="./src/images/logo.png" alt="" />
            <p className='logo-text' >Qeysi</p>
        </div>

        <div>

            <div className='flex-row' >
            <input className='search-input' type="text" placeholder='Ürün ara'/>

            <div style={{display: 'flex', alignItems: 'center'}} >
                {theme ?  (<CiLight className='icon' onClick={changeTheme}/>) : (<IoIosMoon className='icon' onClick={changeTheme}/>  ) }

                <Badge onClick = {() => dispatch(setDrawer())}  badgeContent={products.length} color="error">
                <CiShoppingBasket style={{marginRight:'7px'}} className='icon'/>
                </Badge>

            </div>
         
            
            </div>
           
        </div>

    </div>
  )
}

export default Header