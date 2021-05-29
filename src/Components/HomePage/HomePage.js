import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";

const HomePage = ({ setCategoryId, categoryId }) => {
  const [category, setCategory] = useState([]);
  let history = useHistory();

  useEffect(() => {
    let isActive = true;
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => {
        if (isActive) {
          setCategory(data.trivia_categories);
        }
      })
      .catch((error) => console.log(error.message));
    return () => {
      isActive = false;
    };
  });
  const handleSelect = (id) => {
    const optionId = id.target.value;
    setCategoryId(optionId);
  };
  const handleClick = () => {
    if (categoryId === 0) {
      alert("Please Select a category.");
    } else {
      history.push("/quiz");
    }
  };
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <ul className="list-group">
        <li className="list-group-item bg-success text-white">
          Some Rules of this Quiz
        </li>
        <li className="list-group-item">
          1. You will have only <b>30 seconds</b> per each question.
        </li>
        <li className="list-group-item">
          {" "}
          2. Once you select your answer, it can't be undone.
        </li>
        <li className="list-group-item">
          {" "}
          3. You can't select any option once time goes off.
        </li>
        <li className="list-group-item">
          {" "}
          4. You can't exit from the Quiz while you're playing.
        </li>
        <li className="list-group-item">
          {" "}
          5. You'll get points on the basis of your correct answers.
        </li>
      </ul>

      <div className="dropdown d-flex m-3">
        <p className="mt-2">Select your Category</p>

        <select onChange={handleSelect} className="form-select dropdown-toggle">
          {category.map((list) => (
            <option className="list-group-item" key={list.id} value={list.id}>
              {list.name}
            </option>
          ))}
        </select>
      </div>
      <div className="text-center">
        <button onClick={() => handleClick()} className="btn btn-success my-5">
          Start
        </button>
      </div>
    </div>
  );
};

export default HomePage;
