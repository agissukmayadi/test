"use client";

import React, { useEffect, useReducer, useState } from "react";

function Counter() {
  const callback = (state: any, action: any) => {
    console.log(state, action);
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + action.payload.number };
      case "DECREMENT":
        return { ...state, counter: state.counter - action.payload.number };
      case "TOGGLE_THEME":
        return { ...state, isDark: !state.isDark };
      default:
        throw new Error("UNEXPECTED BROOOO");
    }
  };
  const initialState = {
    counter: 0,
    isDark: false,
  };

  const [state, dispatch]: any = useReducer<any>(callback, initialState);
  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(state.isDark ? "dark" : "light");
  }, [state.isDark]);
  return (
    <>
      <div className="flex items-center  gap-x-4 text-black dark:text-white">
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT", payload: { number: 2 } });
          }}
        >
          -
        </button>
        <span>{state.counter}</span>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT", payload: { number: 4 } });
          }}
        >
          +
        </button>
      </div>
      <button
        className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black"
        onClick={() =>
          dispatch({
            type: "TOGGLE_THEME",
          })
        }
      >
        {state.isDark ? "Light" : "Dark"}
      </button>
    </>
  );
}

export default Counter;
