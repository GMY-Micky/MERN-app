import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Form from "./Form";

const Todos = () => {
  const [control, setControl] = useState(false);
  const [todos, setTodos] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3001/todo/").then((response) => {
        setTodos(response.data);
      });
    }, 2000);
  }, [control, updated]);

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todo/${id}`);
    setUpdated(!updated);
  };

  const deleteAll = () => {
    axios.delete("http://localhost:3001/todo/");
    setUpdated(!updated);
  };

  return (
    <div className="container">
      <div className="container d-flex flex-wrap justify-content-center btn btn-group mb-2 mt-4">
        {!control && (
          <button
            type="button"
            className="btn btn-success border"
            onClick={() => setControl(!control)}
          >
            Add ToDo
          </button>
        )}

        {!control && (
          <Link to="/todos" className="btn btn-success  border">
            Show All
          </Link>
        )}

        {!control && (
          <button
            type="button"
            className="btn btn-danger border"
            onClick={() => deleteAll()}
          >
            Delete All
          </button>
        )}
      </div>

      {control && <Form setControl={setControl} />}

      <div className="container d-flex flex-column">
        {!control &&
          todos.map((todo) => {
            return (
              <div key={todo._id} className="btn-group d-flex flex-row">
                <Link
                  to={`/todos/${todo._id}`}
                  className="btn text-black my-2 bg-light border"
                >
                  <span
                    className="text-break h3"
                    style={{ marginLeft: "10px" }}
                  >
                    {todo.title}
                  </span>
                </Link>
                <button
                  className="btn text-white text-left my-2 border text-decoration-none"
                  onClick={() => deleteTodo(todo._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-trash text-dark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todos;
