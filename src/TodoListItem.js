import 'bootstrap/dist/css/bootstrap.css';

const TodoListItem = ({onDelete,checkTodo,todo}) =>{

  const onChangeCheckbox = () => {
    const nextTodoList = todo.map((item) => ({
      ...item,
      // id 값이 같은 항목의 checked 값을 Toggle 함
      checked: item.id === todo.id ? !item.checked : item.checked,
    }));

    checkTodo(nextTodoList);
  };

  

  const { id, list, content, isDone } = todo;
  return ( 
    
      <div className="TodoListItem">
        <div className="card" >
        <div className="card-body">
          <h4 className="card-title"> {list}</h4>
          <p className="content">{content}</p>
          <button
          onClick={()=>{
              console.log(id);
              if(window.confirm('정말 삭제하시겠습니까?'))
              onDelete(id);
              }} type="button" class="btn btn-outline-danger">삭제하기</button>
         <button  type="button" 
          onClick={()=>{
            checkTodo(id)
          }}
          checked={todo.checked}
          onChange={onChangeCheckbox}

          class="btn btn-outline-success">완료{isDone
          }</button>
        
        
        </div>
      </div>


    </div>
    )};

export default TodoListItem;