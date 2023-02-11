import React from 'react'
import Header from '../Header/Header'
import "./Shop.css"
import logo from "../../../media/images/schabelprojects-logos_transparent.png";
import shopitems from "../Shop/Data/Data.json"
import {Col, Row} from "react-bootstrap"
import {StoreItem} from "./StoreItem/StoreItem"

function Shop() {
    return (
        <>
            <Header/>
            <div>
                <img className="logo_img" src={logo} alt="img"/>
            </div>

            <Row>
                {shopitems.map(item => (
                    <Col key={item.productname}>
                        <StoreItem  {...item} />
                    </Col>
                ))}
            </Row>


        </>
    )
}

export default Shop
