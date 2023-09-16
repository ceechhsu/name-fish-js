import "./styles/score-board.css";
//  Where the score is presented

let answersLeft = ["trout", "salmon", "tuna", "shark"];
const correctAnswer = ["trout", "salmon", "tuna", "shark"];
let correctCount = 0;
let incorrectCount = 0;

const getCounts = (arrA) => {
  let correct = 0;
  let incorrect = 0;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] === correctAnswer[i]) {
      correct++;
    } else {
      incorrect++;
    }
  }
  console.log(`Correct #: ${correct}`);
  return [correct, incorrect];
};

const updateAnswersLeft = (arrA) => {
  let answersLeft = correctAnswer;
  return answersLeft.filter((item, index) => item !== arrA[index]);
};

export function FunctionalScoreBoard({ passNameFish }) {
  let answerLength = passNameFish.length;
  if (answerLength !== 0) {
    [correctCount, incorrectCount] = getCounts(passNameFish);
    answersLeft = updateAnswersLeft(passNameFish);
  }

  return (
    <div id="score-board">
      {console.log(`This is passNameFish: ${answerLength}`)}
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