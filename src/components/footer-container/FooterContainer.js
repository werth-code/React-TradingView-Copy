import React from 'react'
import Footer from "../footer/Footer"
import { Col, Row, Container } from 'reactstrap';
import "./FooterContainer.css"

export default function FooterContainer() {
    return (
        <div className="rows-of-footer">
            <Container>
                <Row xs="1" sm="2" md="4">
                    <Col><Footer className="foot"/></Col>
                    <Col><Footer className="foot"/></Col>
                    <Col><Footer className="foot"/></Col>
                    <Col><Footer className="foot"/></Col>
                </Row>
            </Container>
        </div>
    )
}
