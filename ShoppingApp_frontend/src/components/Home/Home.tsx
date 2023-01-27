import React from 'react'
import Header from '../Header/Header'
import "./Home.css"
import logo from "../../../media/images/schabelprojects-logos_transparent.png"

function Home() {
    return (
        <>
            <Header/>
            <div>
                <img className="logo_img" src={logo} alt="img"/>
            </div>
        </>
    )
}

export default Home
