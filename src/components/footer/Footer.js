import React from 'react'
import { Card } from 'react-bootstrap';

export default function Footer() {
    return (
        <div>
          <Card style={{ border: 'none' }}>
            <Card.Body>
            <Card.Title>Products</Card.Title>
            <Card.Text>Chart</Card.Text>
            <Card.Text>Pine Script</Card.Text>
            <Card.Text>Stock Screener</Card.Text>
            <Card.Text>Economic Calendar</Card.Text>
            </Card.Body>
          </Card>
        </div>
    )
}
