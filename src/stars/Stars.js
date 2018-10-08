import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';

const Star = (props) => {
    return (
        <Container>
            <Row>
                <Col> <FontAwesomeIcon icon={faStar} /> </Col>
                <Col> <FontAwesomeIcon icon={faStar} /> </Col>
                <Col> <FontAwesomeIcon icon={faStar} /> </Col>
                <Col> <FontAwesomeIcon icon={faStar} /> </Col>
            </Row>
            <Row>
                <Col> <FontAwesomeIcon icon={faStar} /> </Col>
                <Col> <FontAwesomeIcon icon={faStar} /> </Col>
                <Col> <FontAwesomeIcon icon={faStar} /> </Col>
                <Col> <FontAwesomeIcon icon={faStar} /> </Col>
            </Row>
            <Row>
                <Col sm="3"> <FontAwesomeIcon icon={faStar} /> </Col>
                <Col sm="3"> <FontAwesomeIcon icon={faStar} /> </Col>
            </Row>
        </Container>
    );
}

export default Star;