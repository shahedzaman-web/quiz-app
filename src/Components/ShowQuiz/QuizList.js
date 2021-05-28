import React, { useState } from "react";

const QuizList = (props) => {
  const { question, correct_answer, incorrect_answers } = props.quiz;

  const [isCorrect, setIsCorrect] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { score, setScore, isFinished } = props;
  const allOption = [correct_answer, ...incorrect_answers];

  // eslint-disable-next-line
  const randomOptionFunction = (allOption) => {
    var currentIndex = allOption.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = allOption[currentIndex];
      allOption[currentIndex] = allOption[randomIndex];
      allOption[randomIndex] = temporaryValue;
    }

    return allOption;
  };

  const handleSelect = (e) => {
    setIsDisabled(true);
    var selectedOption = e.target.value;
    if (selectedOption === correct_answer) {
      setScore(score + 1);
      console.log(score, correct_answer);
      setIsCorrect(true);
    }
  };

  return (
    <div className="my-5">
      <ul className="list-group">
        <li className="list-group-item active " aria-current="true">
          {question}
        </li>
        <div>
          <select
            onChange={handleSelect}
            className="form-select"
            multiple
            disabled={isDisabled && isDisabled ? "disabled" : ""}
          >
            <option className="list-group-item" value={allOption[0]}>
              {allOption[0]}
            </option>
            <option className="list-group-item" value={allOption[1]}>
              {allOption[1]}
            </option>
            <option className="list-group-item" value={allOption[2]}>
              {allOption[2]}
            </option>
            <option className="list-group-item" value={allOption[3]}>
              {allOption[3]}
            </option>
          </select>
        </div>
      </ul>
      {isFinished && (
        <div>
          {isCorrect ? (
            <div className="alert alert-success" role="alert">
              Your Answer Is Correct!
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              Your Answer is wrong. Correct Answer is : {correct_answer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizList;
