import React from 'react'
import { Link } from 'react-router-dom'
import './AppDownload.scss'
import { Icon } from '@iconify/react';

const AppDownload = () => {
  return (
    <div className="appDownload">
        <div className="container">
            <img src='/phone.png' className='mobile-img'/>
            <div className="text">
                <h1>Download Our App</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit officiis maiores ratione eius sunt commodi harum cum ducimus! Vel iste rem omnis maiores quos perspiciatis ad nesciunt laborum consequatur non.</p>
                <div className="btn-wrapper">
                    <Link to='/'>
                    <Icon icon="ion:logo-google-playstore" />
                    <div className="text">
                        <small>GET IT ON</small>
                        <p>Google Play</p>
                    </div>
                    </Link>
                    <Link to='/'>
                    <Icon icon="mdi:apple" />
                    <div className="text">
                        <small>Download on the</small>
                        <p>App Store</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppDownload