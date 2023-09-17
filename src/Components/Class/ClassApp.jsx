import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    fishNames: [],
  };

  isDone = () =>
    this.state.correctCount + this.state.incorrectCount === 4 ? true : false;

  incrementCount = (correct) => {
    this.setState((prevState) => {
      return correct === "correct"
        ? { correctCount: prevState.correctCount + 1 }
        : { incorrectCount: prevState.incorrectCount + 1 };
    });
  };

  inputFishNames = (newName) => {
    this.setState((prevState) => ({
      fishNames: [...prevState.fishNames, newName],
    }));
  };

  render() {
    return (
      <>
        {this.isDone() ? (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            incorrectCount={this.state.incorrectCount}
          />
        ) : (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              fishNames={this.state.fishNames}
            />
            <ClassGameBoard
              handleCount={this.incrementCount}
              handleFishNames={this.inputFishNames}
            />
          </>
        )}
      </>
    );
  }
}
