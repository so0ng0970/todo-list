
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import styled from "styled-components";


const TodoListEditor = ({content,list,onCreate,onChange})=>{
  



    return <div className="TodoListEditor">
     <Title>
      My TodoList 
        </Title>
         <Input>
         
         <div className="row g-3">
          
         <div className="col-sm"> 
         
          <input type="text" class="form-control"
       
          name="list"
           value={list}
            onChange={onChange} 
          />
        </div>
          <div className="col-sm">
          <input type="text" class="form-control"  
      
          name="content"
          value={content} onChange={onChange} />
            </div> 
            <div className="col-sm">
           <button onClick={onCreate}  type="button" class="btn btn-success">추가하기</button>
        </div>
  
  </div>
      </Input>
    </div>
}
const Input = styled.div`
max-width: 1200px;
height: 80px;
  background-color: #ddd;
  padding: 16px;
  margin:  auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;


const Title = styled.h5`
max-width: 1200px;
min-height: 10px;
  background-color: #fff;
  padding: 16px;
  margin:  auto;
  text-align: left;
  border: 1px solid #ddd;
`;



export default TodoListEditor;