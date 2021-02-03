import React from 'react'
import { Card } from 'react-bootstrap';

export default function Footer() {
    return (
        <div>
          <Card>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
            </Card.Body>
          </Card>
        </div>
    )
}
