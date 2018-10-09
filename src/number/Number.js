import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Number.css';


class Number extends React.Component {
    static numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    getClassName = (number) => {
        if(this.props.selectedAnswers.indexOf(number) >= 0) {
            return "rounded-circle selected";
        } else if (this.props.usedNumbers.indexOf(number) >= 0) {
            return "rounded-circle used";
        } else {
            return "rounded-circle";
        }
    }

    render() {
        return (
            <Container>
                <Row className="border justify-content-center p-1">
                    {Number.numbers.map((current, i) => 
                        <Col sm="1" key = {i}>
                            <Button className={this.getClassName(current)} key = {i} onClick={() => this.props.onClickNumber(current)}>{current}</Button>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
} 

export default Number;