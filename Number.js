import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


class Number extends React.Component {
    static numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    render() {
        return (
            <Container>
                <Row className="border justify-content-center p-1">
                    {Number.numbers.map((current, i) => 
                        <Col sm="1" key = {i}>
                            <Button className="rounded-circle" key = {i}>{current}</Button>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
} 

export default Number;