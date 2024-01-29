"use client";

import React, { useEffect, useReducer, useState } from "react";

function Counter() {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + action.payload.number };
      case "DECREMENT":
        return { ...state, counter: state.counter - action.payload.number };
      default:
        throw new Error("UNEXPECTED BROOOO");
    }
  };
  const initialState = {
    counter: 0,
  };

  const [state, dispatch]: any = useReducer<any>(reducer, initialState);
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
    </>
  );
}

export default Counter;
