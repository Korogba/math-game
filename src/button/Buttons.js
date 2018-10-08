import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Row, Col } from 'reactstrap';


const CompoundButton = (props) => {
    return (
        <Container className="text-center">
            <Row style={{ padding: '.5em'}}>
                <Col> <Button color='secondary'> = </Button> </Col>
            </Row>
            <Row style={{ padding: '.5em'}}>
                <Col> <Button color='warning' > <FontAwesomeIcon icon={faSync} spin /> 5 </Button> </Col>
            </Row>
        </Container>
    );
}

export default CompoundButton;