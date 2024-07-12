import React from 'react';
import "./Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';


function Header(){
    return (
        //BEM
        <div className="header">
            {/* <h2>I am a header</h2> */}
            <IconButton>
            <ShoppingCartIcon className='header_icon' fontSize='large' />
            </IconButton>
            
            
        </div>
    )
}

export default Header
