import React from 'react'
import AppDownload from '../../components/AppDownload/AppDownload'
import Banners from '../../components/banners/Banners'
import Contact from '../../components/contact/Contact'
import Gallery from '../../components/Gallery/Gallery'
import Services from '../../components/Services/Services'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div className="home">
        <Slider/>
        <AppDownload/>
        <Services/>
        <Banners/>
        <Gallery/>
        <Contact/>
    </div>
  )
}

export default Home