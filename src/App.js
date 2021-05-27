import { useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ShowQuiz from "./Components/ShowQuiz/ShowQuiz";
import Timer from "./Components/Timer/Timer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [categoryId, setCategoryId] = useState(0);

  return (
    <Router>
      {/* <HomePage setCategoryId={setCategoryId} /> */}

      <Switch>
        <Route exact path="/">
          <HomePage setCategoryId={setCategoryId} categoryId={categoryId} />
        </Route>
        <Route path="/quiz">
          <Timer setIsFinished={setIsFinished} minutes={1} />
          <ShowQuiz
            isFinished={isFinished}
            setIsFinished={setIsFinished}
            categoryId={categoryId}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
