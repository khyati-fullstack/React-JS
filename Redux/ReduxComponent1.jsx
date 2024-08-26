import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateusername } from "./features/Counter";

export default function ReduxComponent1() {
  //local state

  const [name, setname] = useState("");

  let dispatch = useDispatch();
  let data = useSelector((state) => {
    return state.counterkey.username;
  });
  const saveHandler = () => {
    dispatch(updateusername(name));
    setname("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter user name"
        onChange={(e) => setname(e.target.value)}
        value={name}
      />
      <button onClick={saveHandler}>save</button>
      <h1>{data}</h1>
          
    </div>
  );
}
