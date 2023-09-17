import { Component } from "react";

export class ClassFinalScore extends Component {
  getTotal = () => {
    return this.props.correctCount + this.props.incorrectCount;
  };
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.correctCount}</p>
          <hr />
          <p>{this.getTotal()}</p>
        </div>
      </div>
    );
  }
}
