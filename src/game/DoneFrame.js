import React from 'react';
import { Button } from 'reactstrap';


const DoneFrame = (props) => {
    return (
        <div>
            <h2>{props.doneMessage}</h2>
            <Button onClick={props.resetGame}>Play Again</Button>
        </div>
    );
}

export default DoneFrame;