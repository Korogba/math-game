import React from 'react';
import { Container, Button } from 'reactstrap';


const Answer = (props) => {
    return (
        <Container>
            {props.answers.map((number, i) =>
                <Button className="rounded-circle m-1" onClick={() => props.unSelectNumber(number)} key = {i}>{number}</Button>
            )}
        </Container>
    );
}

export default Answer;