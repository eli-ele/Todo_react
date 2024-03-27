import './App.css'
import { useState } from 'react'
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Todo from './components/Todo/Todo';
import Mode from './components/mode-btn/ModeBtn';

function App() {
  const [tasks, setTAsks] = useState("")
  const [todo, setTodo] = useState([
  ]);
  
  function addTask() {
    if (tasks === "") {
      alert("please enter a task")
    } else {
      setTodo((prev) => [
      ...prev,
        { id: prev.length + 1, text: tasks, completed: false }
      ]); 
      setTAsks("");
    }
    
    localStorage.setItem("todo", JSON.stringify(output));
  }


  const toggleMode =() => {
    document.body.classList.toggle("dark-mode-style");
    const isDarkMode = document.body.classList.contains("dark-mode-style");
    window.localStorage.setItem("dark-mode", isDarkMode);
  };

  function deleteTodo(todo_text) {
    setTodo(prev => prev.filter(item => item.text !== todo_text));
  }
  function checkTodo(todo_id) {
    checkTodo((prev) =>
      prev.map((item) => {
        return item.id === todo_id ? { ...item, completed: !item.completed } : item;
      })
    );
  }
  return (
    <>
       <div className={`${
          document.body.classList.contains("dark-mode-style")
          ? "dark-mode-style" 
          : ""
         }`}>
     <div className='maincont'>
      <div className='container'>
        <header className='header'>
            <h1 className='todotext'>TODO</h1>
            <Mode onClick={toggleMode} />
        </header>
        <div className='input-section'>
          <Input
            type="text"
              onChange={(e) => setTAsks(e.target.value)}
              onKeyDown={(e) => {
              if (e.key ==='Enter'){
              addTask();
              handleClick();
                }
              }}
             placeholreder="enter your task..."
             width="327"
             height="48"
             borderRadius={3}
                border="none"
                value={tasks}
          />
          <Button
             onClick={addTask}
             width="30px"
             height="30px"
              cursor="pointer"
              value={tasks}
          >
        ADD
          </Button>
       </div>
       <div className='box'>
        {todo.map((todo)=> {
          return (
            <>
              <Todo
                todoId={todo.id}
                checkTodoFunction={checkTodo}
                deleteTodoFunction={deleteTodo}
                todo={todo}
              />
            </>
          );
        })}
            <div className='input_botton'>
              <div className='item'>{todo.filter((output) => !output.completed).length}item</div>
              <div className='bootondesk'>
                 <p className='all'>ALL</p>
                 <p className='active'>Active</p>
                 <p className='completed'>Completed</p>
                 <p className='completed'>Clear Completed</p>
              </div>
            <div className='clear'>Clear Completed</div>
            </div>
              <div className='mobbotton'>
                 <p className='all'>ALL</p>
                 <p className='active'>Active</p>
                 <p className='completed'>Completed</p>
              </div> 
              <div  className='futer'>Drag and drop to reorder list</div>
          </div>
         </div>
        </div>
     </div>
 
    </>
  );
}

export default App
