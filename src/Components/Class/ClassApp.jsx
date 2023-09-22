import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard, initialFishes } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    fishNames: [],
  };

  inputFishNames = (newName) => {
    this.setState((prevState) => ({
      fishNames: [...prevState.fishNames, newName],
    }));
  };

  render() {
    const isDone = this.state.fishNames.length === initialFishes.length;
    return (
      <>
        {isDone ? (
          <ClassFinalScore passNameFish={this.state.fishNames} />
        ) : (
          <>
            <ClassScoreBoard passNameFish={this.state.fishNames} />
            <ClassGameBoard handleFishNames={this.inputFishNames} />
          </>
        )}
      </>
    );
  }
}
