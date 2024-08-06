import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import Card from "./Card";

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // Fetch initial todo list from API when component mounts
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://669e7fb39a1bda368006c952.mockapi.io/todo/Todo");
        setTodoList(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
        <Input todoList={todoList} setTodoList={setTodoList} />
        <div className="App">
            
            { todoList.map((element,index) =><Card Name={element.Name}
                Description={element.Description} Status={element.Status} key={index} id={element.id} todoList={todoList} setTodoList={setTodoList}/>)}
          
        </div>
           
        </div>
  )
}

export default Home;
