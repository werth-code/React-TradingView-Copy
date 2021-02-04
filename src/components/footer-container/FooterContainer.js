import React from 'react'
import Footer from "../footer/Footer"
import { Container } from 'react-bootstrap';
import "./FooterContainer.css"

export default function FooterContainer() {
    return (
            <Container>
                <Footer className="foot"/>
            </Container>
    )
}
