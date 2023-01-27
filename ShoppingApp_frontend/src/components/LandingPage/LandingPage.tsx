import React from 'react'
import "./LandingPage.css"
import logo from "../../../media/images/schabelprojects-logos_black.png";
import {Link} from "react-router-dom";

function LandingPage() {
    return (
        <>
            <div>
                <img className="logo_img_ease" src={logo} alt="img"/>
            </div>
            <div className="title">
                <h1>Simple Shopping App</h1>
            </div>
            <div className="fadeInDiv">
                <Link className="enter" to="/home" > Enter </Link>
            </div>
        </>
    )
}

export default LandingPage
