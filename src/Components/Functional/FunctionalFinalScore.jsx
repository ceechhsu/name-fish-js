import "./styles/final-score.css";
const correctAnswer = ["trout", "salmon", "tuna", "shark"];

export const FunctionalFinalScore = ({ passNameFish }) => {
  // {passNameFish} contains the arrays of fish names from the user.
  // compare it with the correctAnswer to calculate correctCount and totalCount.
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
