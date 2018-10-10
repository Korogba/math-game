import React, { Component } from 'react';
import CompoundButton from '../button/Buttons';
import Stars from '../stars/Stars';
import Number from '../number/Number';
import Answer from '../answer/Answer';
import DoneFrame from './DoneFrame';
import { Container, Row, Col } from 'reactstrap';


class Game extends Component {

    static generateRandonNumber = () => 1 + Math.floor(Math.random() * 9);

    static initialState = () => ({
        randomNumberOfStars: Game.generateRandonNumber(),
            numberOfRedraws: 5,
            selectedAnswers: [],
            usedNumbers: [],
            answerIsCorrect: null,
            doneStatus: null,
    })

    constructor(props) {
        super(props);
        this.state = Game.initialState();
    }

    handleRedraw = () => {
        if(this.state.numberOfRedraws === 0) { return; }
        this.setState(previousState => ({
            randomNumberOfStars: Game.generateRandonNumber(),
            numberOfRedraws: previousState.numberOfRedraws - 1,
            selectedAnswers: [],
            answerIsCorrect: null,
        }), this.updateDoneStatus);
    }

    handleNumberClick = (clickedNumber) => {
        this.setState(previousState => ({
            selectedAnswers: previousState.selectedAnswers.concat(clickedNumber),
            answerIsCorrect: null,
        }));
    }

    unSelectNumber = (clickedNumber) => {
        this.setState(previousState => ({
            selectedAnswers: previousState.selectedAnswers.filter(number => number !== clickedNumber),
            answerIsCorrect: null,
        }));
    }

    checkAnswer = () => {
        const adder = (accummulator, currentValue) => accummulator + currentValue;
        this.setState(previousState => ({
            answerIsCorrect: previousState.randomNumberOfStars === previousState.selectedAnswers.reduce(adder),
        }));
    }

    acceptAnswer = () => {
        this.setState(previousState => ({
            usedNumbers: previousState.usedNumbers.concat(previousState.selectedAnswers),
            answerIsCorrect: null,
            selectedAnswers: [],
            randomNumberOfStars: Game.generateRandonNumber(),
        }), this.updateDoneStatus);
    }

    possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const possibleNumbers = nums.filter(n => usedNumbers.indexOf(n) === -1);
        console.log(possibleNumbers);

        return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
    }

    updateDoneStatus = () => {
        this.setState(previousState => {
            if(previousState.usedNumbers.length ===9){
                return {doneStatus: 'Done, Nice!'};
            }
            if(previousState.numberOfRedraws === 0 && !this.possibleSolutions(previousState)){
                return {doneStatus: 'Game Over!'};
            }
        });
    }

    resetGame = () => this.setState(Game.initialState());
  
    render() {
        const {randomNumberOfStars, numberOfRedraws, selectedAnswers, answerIsCorrect, usedNumbers, doneStatus} =  this.state
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <h2 className="text-muted pull-left">Play Nine</h2>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 6}}>
                            <h2 className="text-muted pull-right">Play Nine</h2>
                        </Col>
                        </Row>
                        <hr color="white"/>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 2 }}> <Stars numberOfStars={randomNumberOfStars}/> </Col>
                            <Col xs="auto"> 
                                <CompoundButton redraws={numberOfRedraws}
                                                answerIsCorrect={answerIsCorrect}
                                                selectedAnswers={selectedAnswers}
                                                onClickRedraw={this.handleRedraw}
                                                checkAnswer={this.checkAnswer}
                                                acceptAnswer={this.acceptAnswer}/> 
                            </Col>
                            <Col xs="auto"> 
                                <Answer answers={selectedAnswers}
                                        unSelectNumber={this.unSelectNumber} /> 
                            </Col>
                        </Row>
                        <Row>
                        {doneStatus ? 
                            <Col>
                                <DoneFrame doneMessage={doneStatus} resetGame={this.resetGame} />
                            </Col> :
                            <Number onClickNumber={this.handleNumberClick}
                                    selectedAnswers={selectedAnswers}
                                    usedNumbers={usedNumbers}/>
                            
                        }
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
  }

  // From: 
  var possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount ; i++ ) {
      var combinationSum = 0;
      for (var j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
  };

  export default Game;