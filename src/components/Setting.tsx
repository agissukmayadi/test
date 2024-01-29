import { useUserContext } from "@/context/user-context";
import React, { useContext } from "react";

function Setting() {
  const [state, dispatch] = useUserContext();
  return (
    <div className="text-black">
      <input
        className="p-6 rounded-md border border-black"
        value={state.user.name ?? ""}
        type="text"
        placeholder="name"
        name="name"
        onChange={(e) => {
          dispatch({
            type: "SET_USER",
            payload: {
              user: {
                ...state.user,
                name: e.target.value,
              },
            },
          });
        }}
      />
    </div>
  );
}

export default Setting;
