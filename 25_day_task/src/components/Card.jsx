import axios from "axios"
import { useNavigate } from "react-router-dom"
import Edit from "./Edit"
import { useState } from "react"
const Card=({Name,Description,Status,key,id,todoList,setTodoList})=>{
    
    const cardStyle={marginBottom:"13px"}
    const statusStyle={backgroundColor:Status==="Not Completed"?"red":"green"}
    const deleteTodo=async(id)=>{
        let response=await axios.delete(`https://669e7fb39a1bda368006c952.mockapi.io/todo/Todo/${id}`)
        console.log(response.data)
        setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
        
      }
      const navigate=useNavigate();
    return(
      
        <div className="card">
            <p style={cardStyle}>Name: {Name}</p>
            <p style={cardStyle}>Description: {Description}</p>
            
            <label htmlFor="" >Status: </label>
            <select style={cardStyle,statusStyle} className="input" name=""  id="" onChange={(e) => setTodoStatus(e.target.value)}>
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
            </select>
            
            <div className="button">
            <button className="btn1"  onClick={()=>{
                navigate(`/edit/${id}`)
            }}
            >Edit</button>
            <button className="btn2" onClick={()=>
                {
                    deleteTodo(id)
                }
            }>Delete</button>
            </div>

        </div>
    )
}
export default Card