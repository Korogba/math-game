import React from 'react';
import { Container, Button } from 'reactstrap';


const Answer = (props) => {
    return (
        <Container>
            {props.answers.map((number, i) =>
                <Button className="rounded-circle m-1" key = {i}>{number}</Button>
            )}
        </Container>
    );
}

export default Answer;