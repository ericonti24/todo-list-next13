import React from 'react'

const ToDoForm = () => {
  return (
    <div>
      <form>
        <input 
            type="text" 
            placeholder='Enter task..'
        />
        <br/>
        <input 
            type="text" 
            placeholder='Enter due date...' 
        />
        <br/>
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default ToDoForm
