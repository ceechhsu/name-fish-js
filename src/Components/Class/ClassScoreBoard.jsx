import { Component } from "react";
import "./styles/score-board.css";

const correctAnswers = ["trout", "salmon", "tuna", "shark"];

export class ClassScoreBoard extends Component {
  render() {
    const { passNameFish } = this.props;

    const correctCount = passNameFish.filter(
      (answer, index) => answer === correctAnswers[index]
    ).length;

    const incorrectCount = passNameFish.length - correctCount;

    const answersLeft = correctAnswers.filter(
      (answer) => !passNameFish.includes(answer)
    );

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
