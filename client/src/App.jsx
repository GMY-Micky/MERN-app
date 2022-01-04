import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todos from "./components/Todos";
import Error from "./components/Error";
import Todo from "./components/Todo";
import AllTodos from "./components/AllTodos";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="main-container container-sm border my-5 ">
      <h1 className="display-1 text-center mt-3 text-black">
        <strong>ToDo App</strong>
      </h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Todos />
          </Route>
          <Route exact path="/todos">
            <AllTodos />
          </Route>
          <Route path="/todos/:id" children={<Todo />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
