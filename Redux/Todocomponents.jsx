/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo, deleteTodo, updateTodo } from "./features/Todo";
import { SignalCellularNull } from "@mui/icons-material";
import { addTodo, deleteTodo, updateTodo } from "./Feature/Todo";

export default function TodoComponent() {
  const [todo, setTodo] = useState();
  const [editindex, setEditindex] = useState();
  let dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };
  let data = useSelector((state) => {
    return state.todokey.todo
  });

  const deleteHandler = (index) => {
    dispatch(deleteTodo(index));
  };

  const editHandler = (index) => {
    setTodo(data[index]);
    setEditindex(index);
  };
  const handlerupdate = () => {
    dispatch(updateTodo({ index: editindex, data: todo }));
    setEditindex(null);
    setTodo("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      {editindex !== null ? (
        <button onClick={handlerupdate}>Update task</button>
      ) : (
        <button onClick={handleSave}>Save Task</button>
      )}
      {data.map((value, index) => {
        return (
          <div key={index}>
            <h1>{value}</h1>
            <button onClick={() => deleteHandler(index)}>Delete</button>
            <button onClick={() => editHandler(index)}>Edit</button>
          </div>
        );
      })}
        
    </div>
  );
}
