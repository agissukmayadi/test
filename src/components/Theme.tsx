import { AppContext } from "@/context/AppProvider";
import React, { useContext } from "react";

function Theme() {
  const context = useContext(AppContext);
  return (
    <span
      className={`fixed bottom-8 right-8 z-10 w-10 h-10 flex items-center justify-center rounded-full p-8 hover:cursor-pointer ${
        context.isDark ? "bg-white text-black" : " bg-black text-white"
      }`}
      onClick={(e) => {
        context.setIsDark((prevIsDark: boolean) => {
          return !prevIsDark;
        });
      }}
    >
      {context.isDark ? "Light" : "Dark"}
    </span>
  );
}

export default Theme;
