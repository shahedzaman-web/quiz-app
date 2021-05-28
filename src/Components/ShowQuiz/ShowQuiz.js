import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import QuizList from "./QuizList";

const ShowQuiz = ({ over, setOver, categoryId, isFinished, setIsFinished }) => {
  const [quizList, setQuizList] = useState([]);
  const [score, setScore] = useState(0);

  let history = useHistory();
  useEffect(() => {
    let isActive = true;
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=easy&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => {
        if (isActive) {
          setQuizList(data.results);
        }
      })
      .catch((error) => console.log(error.message));
    return () => {
      isActive = false;
    };
  }, [categoryId]);
  const handleClicked = () => {
    setIsFinished(true);
    setOver(true);
  };
  if (over) {
    return setIsFinished(true);
  }
  const handleTryAgain = () => {
    history.push("/");
    setOver(false);
    setIsFinished(false);
  };
  //console.log(quizList);
  return (
    <div className="container">
      <h2 className={isFinished ? "d-blocked" : "d-none"}>
        Your Score :{score}/{quizList.length}
      </h2>
      <div className="text-center">
        {isFinished && (
          <button className="btn btn-primary" onClick={() => handleTryAgain()}>
            Try Again
          </button>
        )}
      </div>
      {quizList.map((quiz) => (
        <QuizList
          score={score}
          setScore={setScore}
          key={quiz.question}
          quiz={quiz}
          isFinished={isFinished}
        ></QuizList>
      ))}
      <div className="text-center">
        {!isFinished && (
          <button
            className="btn btn-success mb-3"
            onClick={() => handleClicked()}
          >
            Submit Your Answer
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowQuiz;
