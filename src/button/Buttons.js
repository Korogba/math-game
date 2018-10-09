import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Row, Col } from 'reactstrap';


const CompoundButton = (props) => {

    let button;

    switch (props.answerIsCorrect) {
        case true:
            button = <Button color='success' onClick={props.acceptAnswer}> <FontAwesomeIcon icon={faCheck} /> </Button>
            break;
        case false:
            button = <Button color='danger' disabled={true}> <FontAwesomeIcon icon={faTimes} /> </Button>
            break;
        default:
            button = <Button color='secondary' onClick={props.checkAnswer} disabled={props.selectedAnswers.length === 0}> = </Button>
            break;
    }

    return (
        <Container className="text-center">
            <Row style={{ padding: '.5em'}}>
                <Col> {button} </Col>
            </Row>
            <Row style={{ padding: '.5em'}}>
                <Col> <Button color='warning' onClick={props.onClickRedraw}> <FontAwesomeIcon icon={faSync} spin /> {props.redraws} </Button> </Col>
            </Row>
        </Container>
    );
}

export default CompoundButton;