import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';

const App = () => {
  return (
    <div className="app">
        <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
        <Footer/>
        </Router>
    </div>
  )
}

export default App