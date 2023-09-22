import { FunctionalGameBoard, initialFishes } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [nameFish, setNameFish] = useState([]);
  const isDone = nameFish.length === initialFishes.length; // Check is user is done with all questions.

  return (
    <>
      {isDone ? (
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
