"use client"
import React, { useState } from "react";

const page = () => {
  const [task,setTask] = useState("");
  const [list,setList] = useState([]);
  let todos = <h2>you do nothing jon snow</h2>

  const submitHandler = () =>{
    setList([...list,task]);
    setTask("");
  }

  const deleteTask = (i)=>{
    let kopi = [...list];
    kopi.splice(i,1);
    setList(kopi);
  }

  todos = list.map((e,i)=>{
    return(
      <div className="bg-yellow-200 mx-6 rounded-md flex py-3 items-center shadow-lg transition-all hover:scale-105 animate-right">
      <h2 className="mx-4 font-bold italic bg-inherit">{e}</h2>
      <button className="bg-green-200 w-5 h-5 rounded-full border-2 border-green-600 mr-11 ml-auto justify-self-end 
      flex justify-center items-center"
      onClick={()=>{
        deleteTask(i);
      }}
      >X</button>
      </div> 
    )
  })
  return (
   <div className="">
    <div className="bg-yellow-300 flex justify-center items-center  h-24 m-6 rounded-md 
    font-bold text-5xl italic text-yellow-700 shadow-lg">My List</div>
    
    <form className="" onSubmit={(e)=>{
      e.preventDefault();
    }}>

    <div className="flex">

    <input
    className="m-6 border-0 border-b-2 border-solid border-yellow-500 rounded-xl bg-yellow-50 shadow-xl w-full"
    type="text" placeholder="  Task" value={task}
    onChange = {(e)=>{
      setTask(e.target.value);
    }}
    /> 
   
    <button 
    className="bg-yellow-400  px-2 rounded-2xl border-0 border-b-4 border-r-1 border-solid border-yellow-600 
    font-bold italic text-yellow-700 shadow-xl m-6 ml-auto justify-self-end w-32 transform transition-all hover:translate-y-1  " 
    onClick={submitHandler}> Let's Go </button>

    </div>

    

    </form>
    <div > {todos}</div>
    
   </div>
  )
}

export default page