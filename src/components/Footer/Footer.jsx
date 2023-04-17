import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            Copyright © 2023 <Link to='/'> Adarsh</Link>.
        </div>
    </footer>
  )
}

export default Footer