import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

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

export function FunctionalGameBoard({ handleNameFish }) {
  const [count, setCount] = useState(0);
  const [fishNameInput, setFishNameInput] = useState("");
  const nextFishToName = initialFishes[count];
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleNameFish((prevNameFish) => [...prevNameFish, fishNameInput]);
    setFishNameInput("");
    if (count < initialFishes.length - 1) {
      setCount(count + 1);
    }
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleOnSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishNameInput}
          onChange={(e) => {
            setFishNameInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
