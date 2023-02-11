import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart} from "react-icons/ai"
import {RiHome2Line} from "react-icons/ri"
import {MdOutlineShoppingBag} from "react-icons/md"
import "./Header.css"
import {ShoppingCartProvider} from "../Shop/ShoppingContext/ShoppingContext";


function Header() {
    return (
        <ShoppingCartProvider>
        <div className="nav-container">
            <div className="nav-content">
                <Link className="nav-item" to="/home"><RiHome2Line/></Link>
                <Link className="nav-item" to="/shop"><MdOutlineShoppingBag/></Link>
                <Link className="nav-item" to="/checkout"><AiOutlineShoppingCart/></Link>
            </div>
        </div>
        </ShoppingCartProvider>
    )
}

export default Header
