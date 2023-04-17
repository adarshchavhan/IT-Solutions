import React from 'react'
import { Link } from 'react-router-dom'
import './Services.scss'

const Services = () => {

  const data = [
    {
      img: 'https://cdn-icons-png.flaticon.com/512/873/873158.png',
      title: 'Provide Best Courses',
      desc: 'We provide best courses that helps us student in placement and learning coding',
      buttons: [
        {
         url: '/',
          label: 'Check'
        },
        {
         url: '/',
          label: 'Support'
        }
      ]
    },

    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8zOIH-9ZhIsqiipJPGbn_OCzBAcshgIUMDSJGNszxEtYtMQ-',
      title: 'Software Development',
      desc: 'We provide best courses that helps us student in placement and learning coding.',
      buttons: [
        {
         url: '/',
          label: 'Check'
        },
        {
         url: '/',
          label: 'Support'
        }
      ]
    },

    {
      img: 'https://t3.gstatic.com/images?q=tbn:ANd9GcQAcmmSD_3Zng-hCJzhMPzw_udSTacCl0qmEEek_hU5kxP5m1OI',
      title: 'Support for project',
      desc: 'We provide best courses that helps us student in placement and learning coding.',
      buttons: [
        {
         url: '/',
          label: 'Check'
        },
        {
         url: '/',
          label: 'Support'
        }
      ]
    },

    {
      img: 'https://t3.gstatic.com/images?q=tbn:ANd9GcQAcmmSD_3Zng-hCJzhMPzw_udSTacCl0qmEEek_hU5kxP5m1OI',
      title: 'Support for project',
      desc: 'We provide best courses that helps us student in placement and learning coding.',
      buttons: [
        {
         url: '/',
          label: 'Check'
        },
        {
         url: '/',
          label: 'Support'
        }
      ]
    },

    {
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRBxSjRz3wq5nCGym9fklEdlcWSa6vnyRcR0ERT98lQ8xMSYuZu',
      title: 'Support for project',
      desc: 'We provide best courses that helps us student in placement and learning coding.',
      buttons: [
        {
         url: '/',
          label: 'Check'
        },
        {
         url: '/',
          label: 'Support'
        }
      ]
    },

    {
      img: 'https://t0.gstatic.com/images?q=tbn:ANd9GcTRzMBGEybtKVFfMsVMN7ozNKjzn9B0M69q9Ol2XpHpg-PMCerB',
      title: '24 hour Support',
      desc: 'We provide best courses that helps us student in placement and learning coding.',
      buttons: [
        {
         url: '/',
          label: 'View website'
        },
        {
         url: '/',
          label: 'Support'
        }
      ]
    },

  ]

  return (
    <div className="services" id='services'>
      <h2 className="heading">Services We Provide</h2>
      <div className="container">
          {data.map((item, i) => <div className='service' key={i}>
              <img src={item.img}/>
              <div className="text">
                <h3 className="title">{item.title}</h3>
                <p className="desc">{item.desc}</p>
                <div className="btn-wrapper">
                  {item.buttons.map((btn, j) => <Link to={btn.url} className="btn" key={j}>{btn.label}</Link> )}
                </div>
              </div>
            </div>)}
      </div>
    </div>
  )
}

export default Services