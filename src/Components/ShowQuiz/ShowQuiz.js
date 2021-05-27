import React, { useEffect, useState } from "react";
import QuizList from "./QuizList";

const ShowQuiz = ({ over, setOver, categoryId, isFinished, setIsFinished }) => {
  const [quizList, setQuizList] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=easy&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => setQuizList(data.results));
  }, [categoryId]);

  const handleClicked = () => {
    setIsFinished(true);
    setOver(true);
  };
  if (over) {
    return setIsFinished(true);
  }
  //console.log(quizList);
  return (
    <div className="container">
      <h2 className={isFinished ? "d-blocked" : "d-none"}>
        Your Score :{score}/{quizList.length}
      </h2>

      {quizList.map((quiz) => (
        <QuizList
          score={score}
          setScore={setScore}
          key={quiz.question}
          quiz={quiz}
          isFinished={isFinished}
        ></QuizList>
      ))}
      {!isFinished && (
        <button className="btn btn-success" onClick={() => handleClicked()}>
          Submit Your Answer
        </button>
      )}
    </div>
  );
};

export default ShowQuiz;
