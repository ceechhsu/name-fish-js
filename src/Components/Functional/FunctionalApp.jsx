import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [nameFish, setNameFish] = useState([]);
  const isDone = () => (nameFish.length === 4 ? true : false);

  return (
    <>
      {isDone() ? (
        <FunctionalFinalScore passNameFish={nameFish} />
      ) : (
        <>
          <FunctionalScoreBoard passNameFish={nameFish} />
          <FunctionalGameBoard handleNameFish={setNameFish} />
        </>
      )}
    </>
  );
}
