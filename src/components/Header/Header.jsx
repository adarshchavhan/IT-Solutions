import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.scss'
import { Icon } from '@iconify/react';
const Header = () => {

    const path = useLocation().pathname;
    
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <header className="header">

        
        <div className="container">
            <Link className='logo' to='/'>
                <img src='/logo.svg'/>
            </Link>

            <div className="right">

                <button className='open-btn' onClick={handleMenu}>
                <Icon icon="ci:menu-alt-02" />
                </button>

                {openMenu && <div className="backdrop"  onClick={handleMenu}></div>}

                <div className={`menu ${openMenu ? 'active' : ''}`}>
                <button className="close-btn" onClick={handleMenu}>×</button>
                    {path==='/' ? <a href='#home' onClick={handleMenu}>Home</a> : <Link to='/' onClick={handleMenu}>Home</Link>}

                    <a href='#services' onClick={handleMenu}>
                        Services
                    </a>

                    <a href='#gallery' onClick={handleMenu}>
                        Gallery
                    </a>

                    <a href='#contact' onClick={handleMenu}>
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header