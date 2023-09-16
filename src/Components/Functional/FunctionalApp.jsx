import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [nameFish, setNameFish] = useState([]);
  const isDone = () => (nameFish.length === 4 ? true : false);

  return (
    <>
      {/* {nameFish.map((eachAnswer, index) => (
        <h3 key={index}>{eachAnswer}</h3>
      ))} */}
      {nameFish.length === 0 ? "Empty" : nameFish.length}
      {!isDone() && <FunctionalScoreBoard passNameFish={nameFish} />}
      {!isDone() && <FunctionalGameBoard handleNameFish={setNameFish} />}
      {isDone() && <FunctionalFinalScore />}
    </>
  );
}
