import { useThemeContext } from "@/context/theme-context";
import React, { useContext } from "react";

function Theme() {
  const [state, dispatch] = useThemeContext();
  return (
    <span
      className={`fixed bottom-8 right-8 z-10 w-10 h-10 flex items-center justify-center rounded-full p-8 hover:cursor-pointer ${
        state.isDark ? "bg-white text-black" : "bg-black text-white"
      }`}
      onClick={() => {
        dispatch({
          type: "TOGGLE_THEME",
        });
      }}
    >
      {state.isDark ? "Light" : "Dark"}
    </span>
  );
}

export default Theme;
