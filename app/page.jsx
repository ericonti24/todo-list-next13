'use client'
import { useState, useEffect } from "react"
import ToDoForm from "./components/ToDoForm"

export default function Home() {

  const [toDoList, setToDoList] = useState([])

  const fetchToDoList = async () => {
    const res = await fetch('http://localhost:3000/api/todos')
    const data = await res.json()
    setToDoList(data)
    console.log(toDoList);
  }

  useEffect(() => {
    fetchToDoList()
  },[])

  return (
    <div>
      <h1>To Do List</h1>
      <ToDoForm />
    </div>
  )
}
