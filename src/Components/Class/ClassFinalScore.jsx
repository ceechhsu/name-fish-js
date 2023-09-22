import { Component } from "react";

const correctAnswer = ["trout", "salmon", "tuna", "shark"];

export class ClassFinalScore extends Component {
  render() {
    const { passNameFish } = this.props;
    const correctCount = passNameFish.filter(
      (answer, index) => answer === correctAnswer[index]
    ).length;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{passNameFish.length}</p>
        </div>
      </div>
    );
  }
}
