import { Component } from "react";
import "./styles/score-board.css";

let answersLeft = ["trout", "salmon", "tuna", "shark"];
const correctAnswers = ["trout", "salmon", "tuna", "shark"];

export class ClassScoreBoard extends Component {
  updateAnswersLeft = (arrA) => {
    answersLeft = correctAnswers;
    return answersLeft.filter((item, index) => item !== arrA[index]);
  };

  render() {
    if (this.props.correctCount + this.props.incorrectCount > 0) {
      answersLeft = this.updateAnswersLeft(this.props.fishNames);
    }

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correctCount}</div>
      </div>
    );
  }
}
