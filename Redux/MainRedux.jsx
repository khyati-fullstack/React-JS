import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, inc_by_user } from "./Feature/Counter";
// import { decrement, inc_by_user, increment } from "./features/Counter";
// import Score from "./features/Score";

export default function MainRedux() {
  let data = useSelector((state) => {
    console.log("---> state", state);
    // return state.counterkey.Counter;
    return state.counterkey.count;
  });

  const handledynamik = () => {
    dispatch(inc_by_user(100));
  };
  let scoredata = useSelector((state) => {
    return state.scorekey.score;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux</h1>
      <button onClick={() => dispatch(increment())}>INC +</button>
      <h1>Counter : {data}</h1>
      <button onClick={() => dispatch(decrement())}>DEC -</button>
      <button onClick={handledynamik}>inc_by_user</button>
      <h1>score : {scoredata}</h1>
    </div>
  );
}
