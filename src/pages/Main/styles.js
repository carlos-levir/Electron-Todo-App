import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const NewTodo = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export const NewTodoInput = styled.input`
  height: 50px;
  padding: 0 15px;
  margin: 10px;
  border: 0.5px solid #333;
  border-radius: 4px;
  font-size: 14px;
`;

export const TodosList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 50px;
`;

export const Todo = styled.div`
  width: 250px;
  max-width: 250px;
  border: 1px solid #eee;
  padding: 15px 20px;
  text-align: left;
  margin: 10px;
`;

export const TodoName = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 250px;
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  background: #009cde;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const AddTodoMessage = styled.h1`
  color: #333;
`;
