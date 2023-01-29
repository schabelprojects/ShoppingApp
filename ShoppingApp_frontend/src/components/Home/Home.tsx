import React, { useEffect } from 'react'
import Header from '../Header/Header'
import logo from "../../../media/images/schabelprojects-logos_transparent.png"
import "./Home.css"
import imac from "../../../media/images_slider/imac.png"
import office from "../../../media/images_slider/office.jpg"
import iphone_one from "../../../media/images_slider/iphone_1.jpg"
import iphone_two from "../../../media/images_slider/iphone.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'


function Home() {

useEffect(() => {
AOS.init({duration: 2000})
}, [])


  return (
    <div>
        <>
            <Header/>
            <div>
                <img className="logo_img" src={logo} alt="img"/>
            </div>
            <div className='information-container'>
                <div className='information'>
                    <img className='content' src={imac} alt="" />
                    <h2>Get the right Hardware for your daily job.</h2>
                </div>
            </div>
            <div className='information-container' data-aos="fade-up">
                <div className='information'>
                    <img className='content' src={office} alt="" />
                    <h2>Reachable at any time with the best products.</h2>
                </div>
            </div>
            <div className='information-container' data-aos="fade-right">
                <div className='information'>
                    <img className='content' src={iphone_two} alt="" />
                    <h2>The newest Apps, Security Measures and Functions.</h2>
                </div>
            </div>
            <div className='information-container' data-aos="fade-left">
                <div className='information'>
                    <img className='content' src={iphone_one} alt="" />
                    <h2>Version Control, High Quality and Compability.</h2>
                    <Link className='lnk-btn' to="/shop">Buy Now</Link>
                </div>
            </div>
        </>
    </div>
  )
}

export default Home