import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'

const Banners = () => {

    const banners = [
        {
            img: '/5.png',
            title: 'We work for people, not for money',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolor totam inventore iste asperiores minus rerum debitis voluptatibus consequuntur.',
            button: {
                url: '/',
                label: 'Click here'
            }
        },
        {
            img: '/6.png',
            title: 'Learn here & get the job over 5LPA.',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed molestiae, corporis doloribus, amet aspernatur reprehenderit vero illum beatae iure, aliquid provident! Saepe autem consequatur ea, vero distinctio numquam adipisci repellat.',
            button: {
                url: '/',
                label: 'Click here'
            }
        }
    ]

  return (
    <div className="banners-wrapper">
        {banners.map((banner, i) => <div className='banner' key={i}>
            <div className="container">
                <img src={banner.img} alt="" />
                <div className="text">
                <h3>{banner.title}</h3>
                <p>{banner.desc}</p>
                <Link to={banner.button.url}>{banner.button.label}</Link>
                </div>
          </div>
        </div>)}
    </div>
  )
}

export default Banners