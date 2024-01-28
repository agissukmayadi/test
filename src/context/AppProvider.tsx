import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const AppContext = createContext<any>({
  test: "TES",
});

export function AppProvider({ children }: any) {

  // const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [user, setUser] = useState<any>({});
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const user = {
      name: "Agis Sukmayadi",
      avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    };
    setUser(user);
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(isDark ? "dark" : "light");
  }, [isDark]);

  const appContextValue = {
    user,
    setUser,
    isDark,
    setIsDark,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
