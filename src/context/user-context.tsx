import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const UserContext = createContext<any>({});

export function UserProvider({ children }: any) {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "SET_USER":
        return { ...state, user: action.payload.user };
      default:
        throw new Error("UNEXPECTED BROOOO");
    }
  };

  const initialState = {
    user: {},
  };

  const [state, dispatch]: any = useReducer<any>(reducer, initialState);

  useEffect(() => {
    const user = {
      name: "Agis Sukmayadi",
      avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    };
    dispatch({
      type: "SET_USER",
      payload: {
        user,
      },
    });
  }, []);

  const userContextValue = [state, dispatch];

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
