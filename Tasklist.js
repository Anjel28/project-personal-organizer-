import React,  { useEffect, useState } from 'react';



   const TaskList = () => {
      const [tasks, setTasks] =useState([]);
      const [newTask, setTask] =useState('');

      const addTask = () => {
        if (newTask.trim() !== '') {
            setTask([... tasks, { id: Date.now(), text: newTask}]);
           // setnewTasks('');
        }
      };

     

       const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !==  id));
       }

       return(
        <div>
            <h1>Personal Organizer</h1>
            <input>
            type="text"
            value={newTask}
           {/*Change={(e)  => setnewTasks(e. target. value)}*/}
            placeholder="Add a new task"
            </input>
            <button>onClick={addTask}Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                    <button onClick={() =>  deleteTask(task.id)}>delete</button>
                        
                    </li>
                ))}
            </ul>
        </div>
       );
   };

    export default TaskList;

    
