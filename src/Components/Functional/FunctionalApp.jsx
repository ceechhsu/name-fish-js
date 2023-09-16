import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [nameFish, setNameFish] = useState([]);
  const isDone = () => (nameFish.length === 4 ? true : false);

  return (
    <>
      {!isDone() && <FunctionalScoreBoard passNameFish={nameFish} />}
      {!isDone() && <FunctionalGameBoard handleNameFish={setNameFish} />}
      {isDone() && <FunctionalFinalScore passNameFish={nameFish} />}
    </>
  );
}
