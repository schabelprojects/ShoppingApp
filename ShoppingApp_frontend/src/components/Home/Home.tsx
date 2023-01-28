import React from 'react'
import Header from '../Header/Header'
import logo from "../../../media/images/schabelprojects-logos_transparent.png"
import "./Home.css"
import office from "../../../media/images_slider/imac.png"


function Home() {
  return (
    <div>
        <>
            <Header/>
            <div>
                <img className="logo_img" src={logo} alt="img"/>
            </div>
            <div className='information-container'>
                <div className='information'>
                    <img className='content' src={office} alt="" />
                    <h2>Get the right Hardware for your daily job.</h2>
                </div>
            </div>
        </>
    </div>
  )
}

export default Home