import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3001/todo/").then((response) => {
        setTodos(response.data);
      }, 2000);
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id} className="container border my-3">
            <table className="table table-bordered mt-3">
              <tbody>
                <tr>
                  <td className="h5">id</td>
                  <td>{todo._id}</td>
                </tr>
                <tr>
                  <td className="h5">title</td>
                  <td>{todo.title}</td>
                </tr>
                <tr>
                  <td className="h6">body</td>
                  <td>{todo.body}</td>
                </tr>
              </tbody>
            </table>
            <img
              src={todo.image}
              alt="Image not found"
              className="mb-3"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
        );
      })}
      <Link to="/" className="btn btn-success text-white my-3 border">
        Back to ToDos
      </Link>
    </div>
  );
};

export default AllTodos;
