import React from 'react'
import CardComp from '../CardComp'
import { Container, Row, Col } from 'reactstrap';

export default function MainContainer() {
    return (
        <div className="main-container">
            <Container>
                <Row xs="1" sm="1" md="1" lg="2">
                    <Col><CardComp/></Col>
                    <Col><CardComp/></Col>
                    <Col><CardComp/></Col>
                </Row>
            </Container>    
        </div>
    )
}
