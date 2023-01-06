import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <p>{counter}</p>
      <div>
        <button onClick={() => dispatch(increment({ counter: 1 }))}>+</button>
        <button onClick={() => dispatch(decrement({ counter: 1 }))}>-</button>
      </div>
    </div>
  );
}
