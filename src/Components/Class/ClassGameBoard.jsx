import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

export const initialFishes = [
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

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { fishNameInput, count } = this.state;
    this.props.handleFishNames(fishNameInput);
    this.setState({
      fishNameInput: "",
      count: count < initialFishes.length - 1 ? count + 1 : count,
    });
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
