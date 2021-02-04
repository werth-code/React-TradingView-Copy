import React from 'react'
import "./CardComp.css"
import { Card } from 'react-bootstrap';
import TradingViewWidget from 'react-tradingview-widget';
import ListingsInContainer from '../linstings-in-container/ListingsInContainer';



export default function CardComp() {
    return (
        
        <div className="cc-container">
            <Card style={{ width: 'auto', margin: "2%"}}>
                <Card.Body>
                    <Card.Title className="indicies">Indicies</Card.Title>
                    
                        <TradingViewWidget symbol="AMEX:SLV" autosize/>

                        <ListingsInContainer />

                </Card.Body>
            </Card>

        </div>
    )
}


