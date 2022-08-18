import TodoListItem from "./TodoListItem";


const TodoList01 = ({todos,onDelete,todoList,checkTodo}) =>{




  
    console.log(todoList)
    return (
    <div className="TodoList01">
        
    <h2>Working...🔥</h2>
    <h4>{todos.lengh}</h4>
    <div>
      {todos.filter((todo) => !todo.isDone) 
        .map((it)=>(
        <TodoListItem
          key={it.id}
          todo={it}
          onDelete={onDelete}
          checkTodo={checkTodo}/> 
          ))}
    </div>
    <h2>Done...🔥</h2>

    <h4>{todos.lengh}</h4>
    <div>
      {todos.filter((todo) =>todo.isDone) 
        .map((it)=>(
        <TodoListItem
          key={it.id}
          todo={it}
          onDelete={onDelete}
          checkTodo={checkTodo}/> 
          ))}
    </div>
    </div>
    );
};

TodoList01.defauitProops = {
    todoList:[],
};

export default TodoList01;