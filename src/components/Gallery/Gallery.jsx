import React from 'react'
import { Link } from 'react-router-dom'
import './Gallery.scss'

const Gallery = () => {

    const images = [
        {
            url:'/',
            img: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },

        {
            url:'/',
            img: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z29vZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },

        {
            url:'/',
            img: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdvb2dsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },

        {
            url:'/',
            img: 'https://images.unsplash.com/photo-1642211474539-1555e41566d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjBoZWFkcWF1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },

        {
            url:'/',
            img: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },

        {
            url:'/',
            img: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
        },

        
    ]

  return (
    <div className="gallery" id='gallery'>

        <h2>Gallery</h2>

        <div className="container">
            {images.map((img, i) => <Link to={img.url} key={i}>
                <img src={img.img}/>
            </Link>)}
        </div>

        <Link to='/gallery' className='btn'>View More</Link>
    </div>
  )
}

export default Gallery