import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import { UserContext } from '../../App'


export default function Footer() {

  const footerArr = useContext(UserContext)   // This passes in our variable exported from App.j
  console.log(footerArr)

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
