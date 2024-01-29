"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const ThemeContext = createContext<any>({});

export function ThemeProvider({ children }: any) {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "TOGGLE_THEME":
        return { ...state, isDark: !state.isDark };
      default:
        throw new Error("UNEXPECTED BROOOO");
    }
  };

  const initialState = {
    isDark: localStorage.getItem("theme") === "dark",
  };

  const [state, dispatch]: any = useReducer<any>(reducer, initialState);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(state.isDark ? "dark" : "light");
    localStorage.setItem("theme", state.isDark ? "dark" : "light");
  }, [state.isDark]);

  const themeContextValue = [state, dispatch];

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
