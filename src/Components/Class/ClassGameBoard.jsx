import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassGameBoard extends Component {
  state = {
    count: 0,
    fishNameInput: "",
  };

  isCorrect = () => {
    return initialFishes[this.state.count].name === this.state.fishNameInput;
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.handleFishNames(this.state.fishNameInput);
    this.isCorrect()
      ? this.props.handleCount("correct")
      : this.props.handleCount("incorrect");
    this.setState({ fishNameInput: "" });

    if (this.state.count < initialFishes.length - 1) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  handleOnChange = (e) => {
    this.setState({ fishNameInput: e.target.value });
  };

  render() {
    const nextFishToName = initialFishes[this.state.count];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleOnSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.fishNameInput}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
