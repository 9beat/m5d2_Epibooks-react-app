import { Container, Col, Row, Card } from "react-bootstrap";
// import Fantasy from "../json/fantasy.json";
// import History from "../json/history.json";
// import Romance from "../json/romance.json";
import horrorBooks from "../json/horror.json";
// import SciFi from "../json/scifi.json"
// import { useEffect, useState } from 'react';
import './LatestRelease.css'



export default function LatestRelease() {

    return (
        <Container>
        <Row>
            {
            horrorBooks.map( (book, i) => (
            <Col key={i} xxxl={1} xl={2} lg={3} md={4} sm={6} xs={6} xxs={12} className="my-2 ">
            <Card.Body className="body-card">
                <Card.Img  key={i} src={book.img} alt={book.title} className="book-image"/>
                    <Card.Title key={i}>{book.title}</Card.Title>
                </Card.Body>
            </Col>
            ))
            }
        </Row>
        </Container>
    );
}
