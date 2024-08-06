import { useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";
const cardStyle={marginBottom:"13px"}
const Edit = ()=>{
    const {id}=useParams()
    const [singleTodo,setSingleTodo]=useState("")
   
    console.log(singleTodo)
    // using fetch
  //  const getMovieId=async ()=>{
  //   let data=await fetch(`https://6695fead0312447373c0a4cf.mockapi.io/Movie/${id}`)
  //     let res=await data.json()
  //     console.log(res)
  //     setSingleMovie(res)
  //  }

  // using axios 
  const getTodoId=async()=>{
    let response=await axios.get(`https://669e7fb39a1bda368006c952.mockapi.io/todo/Todo/${id}`)
    console.log(response.data)
    setSingleTodo(response.data) 
  }

   useEffect(()=>{
        getTodoId()
   },[])
  return (
   <>
   {singleTodo?<EditTodoForm singleTodo={singleTodo} id={id}/>:<p>Loading.....</p>}
   </>
  );
};

export default Edit;
const EditTodoForm=({singleTodo,id})=>{
    const navigate=useNavigate()
    const [Name,setTodoName]=useState(singleTodo.Name)
    const [Description,setTodoDescription]=useState(singleTodo.Description)
    const [Status,setTodoStatus]=useState(singleTodo.Status)


    //using axios
    const updateTodo=async(id,movie)=>{
      let response=await axios.put(`https://669e7fb39a1bda368006c952.mockapi.io/todo/Todo/${id}`,movie)
      console.log(response.data)
      navigate('/home')
    }
    return(
        <>
        <div className="update-div">
            <div className="content-div">
              <h1 className="update">UPDATE TODO</h1>
              <div className="border-form">
              <input
        type="text"
        id="Name"
        defaultValue={Name}
        onChange={(e) => setTodoName(e.target.value)}
        className="input_field"
      />
       <input
        type="text"
        id="Description"
        defaultValue={Description}
        onChange={(e) => setTodoDescription(e.target.value)}
        className="input_field"
      />
      <button className="btn1" onClick={()=>{  
            const updateddata={
                Name:Name,
                Description:Description,
                Status:Status
            }       
          updateTodo(id,updateddata)
      
      }}
            >UPDATE</button>
              </div>
           
            </div>

        </div>
      </>
    )
}
