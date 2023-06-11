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
            <Col key={i} xxxl={1} xl={2} lg={3} md={4} sm={6} xs={6} xxs={12} className="m-0">
            <Card.Body className="body-card p-0 mt-6">
                <Card.Img  key={i} src={book.img} alt={book.title} className="book-image"/>
                <Card.Title key={i} className="book-title mt-0 pt-0">{book.title}</Card.Title>
            </Card.Body>
            </Col>
            ))
            }
        </Row>
        </Container>
    );
}
