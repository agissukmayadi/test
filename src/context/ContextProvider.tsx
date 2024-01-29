import React from "react";
import { UserProvider } from "./user-context";
import { ThemeProvider } from "./theme-context";

function ContextProvider({ children }: any) {
  return (
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  );
}

export default ContextProvider;
