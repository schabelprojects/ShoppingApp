import React from 'react'
import Header from '../Header/Header'
import "./CheckOut.css"
import logo from "../../../media/images/schabelprojects-logos_transparent.png";

function Checkout() {
    return (
        <>
            <Header/>
            <div>
                <img className="logo_img" src={logo} alt="img"/>
            </div>
        </>
    )
}

export default Checkout
