import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import './Stars.css';

const Star = (props) => {

    //ToDo: Remove!
    let counter = 0;

    const createCols = (currentCount) => {
        let cols = [];

        for(var i = 0, j = currentCount; i < 4 && j > 0; i++, j--) {
            cols.push(<Col sm="3" key={counter}> <FontAwesomeIcon icon={faStar} /> </Col>)
            counter++;
        }
        
        for(var k = cols.length; k < 4; k++) {
            cols.push(<Col sm="3" key={counter}> <FontAwesomeIcon icon={faStar} className="hide" /> </Col>)
            counter++;
        }

        return cols;
    }

    return (
        <Container>
            <Row>
                {createCols(props.numberOfStars)}
            </Row>
            <Row>
                { createCols(props.numberOfStars - 4) }
            </Row>
            <Row>
                { createCols(props.numberOfStars - 8) }
            </Row>
        </Container>
    );
}

export default Star;