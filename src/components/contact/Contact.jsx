import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.scss'
import {Icon} from '@iconify/react'

const Contact = () => {

    const social = [
        {
            icon: "ic:baseline-facebook" ,
            url: '/'
        },
        {
            icon: "ant-design:twitter-circle-filled",
            url: '/'
        },
        {
            icon: "entypo-social:linkedin-with-circle",
            url:'/'
        },
        {
            icon: "entypo-social:youtube-with-circle",
            url:'/'
        }
    ]

  return (
    <div className="contact" id='contact'>
        {/* <h2>Contact Us</h2> */}
        <div className="container">
        <div className="text">
            <h1>GET IN TOUCH</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem illo consectetur eius aliquid error debitis saepe, iste, sint unde earum, ad laboriosam nesciunt minus quibusdam? Laboriosam nam libero commodi at!</p>
            <div className="social">
                {social.map((item, i)=> <Link to={item.url} key={i}>
                    <Icon icon={item.icon}/>
                </Link>)}
            </div>
        </div>
        <form>
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Your Email' />
            <textarea placeholder='Your query here' cols="30" rows="10"></textarea>
            <button>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact