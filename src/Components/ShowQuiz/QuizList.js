import React, { useState } from "react";

const QuizList = (props) => {
  const { question, correct_answer, incorrect_answers } = props.quiz;
  const [isCorrect, setIsCorrect] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { score, setScore, isFinished } = props;
  const allOption = [correct_answer, ...incorrect_answers];
  console.log(allOption);
  console.log(props.quiz);
  // const randomOptionFunction = () => {
  //   const randomItem = allOption[Math.floor(Math.random() * allOption.length)];

  //   var index = allOption.indexOf(randomItem);
  //   if (index !== -1) {
  //     const randomOption = allOption.splice(index, 1);
  //     return (
  //       <option class="list-group-item" value={randomOption[0]}>
  //         {randomOption[0]}
  //       </option>
  //     );
  //   }
  // };
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

  // Used like so

  console.log(allOption);
  // console.log(randomOptionFunction());
  // console.log(randomOptionFunction());
  // console.log(randomOptionFunction());
  // console.log(randomOptionFunction());
  // const shuffle = () => {
  //   for (var i = allOption.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = allOption[i];
  //     allOption[i] = allOption[j];
  //     allOption[j] = temp;
  //   }
  //   return allOption;
  //   console.log(allOption);
  // };
  //console.log(allOption);
  // const randomOption = [];
  // for (let i = 0; i <= 4; i++) {
  //   randomOption[i] = [randomOptionFunction()];
  // }
  // console.log(randomOption);
  // console.log(randomOptionFunction());
  // console.log(randomOptionFunction());
  // console.log(randomOptionFunction());
  // console.log(randomOptionFunction());
  // console.log(correct_answer);

  const handleSelect = (e) => {
    setIsDisabled(true);
    var selectedOption = e.target.value;
    if (selectedOption === correct_answer) {
      setScore(score + 1);
      console.log(score, correct_answer);
      setIsCorrect(true);
    } else console.log("ans didn't match");
    console.log(selectedOption);
  };

  return (
    <div className="my-5">
      <ul class="list-group">
        <li class="list-group-item active " aria-current="true">
          {question}
        </li>
        <div>
          <select
            onChange={handleSelect}
            class="form-select"
            multiple
            disabled={isDisabled && isDisabled ? "disabled" : ""}
          >
            <option class="list-group-item" value={allOption[0]}>
              {allOption[0]}
            </option>
            <option class="list-group-item" value={allOption[1]}>
              {allOption[1]}
            </option>
            <option class="list-group-item" value={allOption[2]}>
              {allOption[2]}
            </option>
            <option class="list-group-item" value={allOption[3]}>
              {allOption[3]}
            </option>
          </select>
        </div>
      </ul>
      {isFinished && (
        <div>
          {isCorrect ? (
            <div class="alert alert-success" role="alert">
              Your Answer Is Correct!
            </div>
          ) : (
            <div class="alert alert-danger" role="alert">
              Your Answer is wrong. Correct Answer is : {correct_answer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizList;
