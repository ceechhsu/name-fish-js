import "./styles/final-score.css";
const correctAnswer = ["trout", "salmon", "tuna", "shark"];

export const FunctionalFinalScore = ({ passNameFish }) => {
  const correctCount = passNameFish.filter(
    (answer, index) => answer === correctAnswer[index]
  ).length;
  const totalCount = passNameFish.length;
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
};
