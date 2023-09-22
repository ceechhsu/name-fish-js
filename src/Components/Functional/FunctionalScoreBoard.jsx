import "./styles/score-board.css";

const correctAnswer = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({ passNameFish }) {
  const correctCount = passNameFish.filter(
    (answer, index) => answer === correctAnswer[index]
  ).length;
  const incorrectCount = passNameFish.length - correctCount;
  const answersLeft = correctAnswer.filter(
    (answer) => !passNameFish.includes(answer)
  );

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
