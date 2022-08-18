import React, {  useState } from "react";

import TodoListEditor from "./TodoListEditor";
import"./App.css";
import TodoList01 from "./TodoList01";





function App() {
  const [data]=useState([]);
  const [ state, setState ] = useState({ list: '', content: '', isDone: false });
  const [ todos, setTodos ] = useState([
     
    ]); // 객체 배열 넣기
  


  const { list, content, isDone } = state;



  const onChange = (e)=>{
    const { name, value } =e.target;
    setState({
      ...state,

      [name]:value
    })};


  const onCreate = () =>{

    setTodos([...todos,
       {id: todos.length+1,
       list: list,
        content: content, 
        checked: false,
       isDone: isDone}])
   
    setState({ list: '', content: '', })
  };

  const onDelete = (Id)=>{
    console.log(`${Id}가 삭제되었습니다`);
    // eslint-disable-next-line no-global-assign
    const newTodoList01= todos.filter((it)=>it.id !==Id);
   setTodos(newTodoList01);
  }

  const checkTodo = (id) => { setTodos(todos => todos.map(todo =>
     (todo.id === id? {...todo, isDone: !todo.isDone} : todo) ) ) };
  
  return (
    <div className="App">
      
      
        <TodoListEditor list={list} content={content} onCreate={onCreate}  onChange={onChange}/>
        <TodoList01 todos={todos}
        onDelete={onDelete} todoList={data} checkTodo={checkTodo} />
     
    </div> 
  );
  }


export default App;