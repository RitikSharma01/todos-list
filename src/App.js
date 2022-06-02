// import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/header';
import { Todos } from './Mycomponents/Todos';
import { Footer } from './Mycomponents/Footer';
import { useState, useEffect } from 'react';
import { AddTodo } from './Mycomponents/AddTodo';
import { About } from './Mycomponents/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  

  return (
    <>
      <BrowserRouter>

        <Header title='MyTodoList' searchBar={true} />

        <Routes>

          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />

        </Routes>




        <Footer />
      </BrowserRouter>
    </>
  );
}
function Home() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    // deleting in this way react 
    // let index=todos.indexOf(todo);
    // todos.slice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodos = {
      sno: sno,
      title: title,
      desc: desc,
    }
    if (!(!title || !desc)) {
      console.log("I am adding todo", title, desc)
      setTodos([...todos, myTodos]);
      console.log(myTodos)
    }

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
        
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}
export default App;
