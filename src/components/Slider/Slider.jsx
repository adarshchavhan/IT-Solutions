import React from 'react'
import {Carousel} from 'antd'
import './Slider.scss'

const Slider = () => {

  const slides = [
    {
      img: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text:''
    },
    {
      img: 'https://images.unsplash.com/photo-1529611934128-376c7bb1c88a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text:''
    },
    {
      img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text:''
    },
    {
      img: 'https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text:''
    }
  ]

  return (
    <div className="slider"  id='home'>
      <Carousel autoplay>
        {slides.map((slide, i) =><div className='slide' key={i}>
          <img src={slide.img} alt="1" height='100%' />
          <div className="text">{slide.text}</div>
        </div>)}
      </Carousel>
    </div>
  )
}

export default Slider