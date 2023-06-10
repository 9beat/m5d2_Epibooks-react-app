import { Container, Col, Row } from 'react-bootstrap';
import './Welcome.css'


export default function Jumbotron() {
    return (
    <Container fluid className='hero-container'>
    <Row>
        <Col className="hero-col bg-image" >
        <h1 className="text-warning my-5 epic-heading">EpiBooks</h1>
        </Col>
    </Row>
    </Container>
    )
}
