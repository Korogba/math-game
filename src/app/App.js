import React, { Component } from 'react';
import CompoundButton from '../button/Buttons';
import Stars from '../stars/Stars';
import Number from '../number/Number';
import Answer from '../answer/Answer';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col sm={{ size: 'auto', offset: 1 }}>
                <h2 className="text-muted pull-left">Play Nine</h2>
                <hr/>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 'auto', offset: 2 }}> <Stars /> </Col>
              <Col xs="auto"> <CompoundButton /> </Col>
              <Col xs="auto"> <Answer answers={[1, 2, 3, 4, 5, 6, 7, 8, 9]} /> </Col>
            </Row>
            <Row>
              <Number />
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
