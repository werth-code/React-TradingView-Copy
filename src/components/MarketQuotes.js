import React from 'react'
import { Button, Card } from 'react-bootstrap';
import "./MarketQuotes.css"

export default function MarketQuotes() {
    return (
        <div className="mq-container">
            <Card>
                <Card.Body>
                    <Card.Title className="mq-header">MARKET QUOTES</Card.Title>
                    <Button className="btn" variant="secondary" size="sm">Forex</Button>
                    <Button className="btn" variant="secondary" size="sm">Futures</Button>
                    <Button className="btn" variant="secondary" size="sm">Stocks</Button>
                    <Button className="btn" variant="secondary" size="sm">Indicies</Button>
                    <Button className="btn" variant="secondary" size="sm">Bonds</Button>
                    <Button className="btn" variant="secondary" size="sm">Crypto</Button>
                    <Button className="btn" variant="secondary" size="sm">World Economic Data</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
