import { useState } from "react";
import HomePage from "./Components/HomePage/HomePage";
import ShowQuiz from "./Components/ShowQuiz/ShowQuiz";
import Timer from "./Components/Timer/Timer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [over, setOver] = useState(false);
  return (
    <Router>
      <div className="bg-light">
        <Switch>
          <Route exact path="/">
            <HomePage setCategoryId={setCategoryId} categoryId={categoryId} />
          </Route>
          <Route path="/quiz">
            <Timer
              setIsFinished={setIsFinished}
              setOver={setOver}
              over={over}
              minutes={5}
            />
            <ShowQuiz
              isFinished={isFinished}
              setIsFinished={setIsFinished}
              categoryId={categoryId}
              setOver={setOver}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
