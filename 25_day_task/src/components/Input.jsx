import { useState } from "react";
import axios from "axios";
import Todo from "./Todo";

const Input = ({ todoList, setTodoList }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoStatus, setTodoStatus] = useState("Not Completed");

  const postList = async (todoItem) => {
    try {
      let response = await axios.post("https://669e7fb39a1bda368006c952.mockapi.io/todo/Todo", todoItem);
      const newTodo = response.data;
      setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div className="todoBorder">
      <h2>My Todo</h2>
      <input
        type="text"
        id="todoName"
        placeholder="Todo Name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        className="input_field"
      />
      <input
        type="text"
        id="todoDescription"
        placeholder="Todo Description"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        className="input_field"
      />
      <button
        onClick={() => {
          const todoListItem = {
            Name: todoName,
            Description: todoDescription,
            Status: todoStatus,
          };
          postList(todoListItem);
          setTodoName(""); // Clear input fields
          setTodoDescription("");
        }}
        className="todoButton"
      >
        Add Todo
      </button>
      <Todo/>
    </div>
  );
};

export default Input;
