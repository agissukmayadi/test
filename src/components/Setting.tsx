import { AppContext } from "@/context/AppProvider";
import React, { useContext } from "react";

function Setting() {
  const context = useContext(AppContext);
  return (
    <div className="text-black">
      <input
        className="p-6 rounded-md border border-black"
        value={context.user.name ?? ""}
        type="text"
        placeholder="name"
        name="name"
        onChange={(e) => {
          context.setUser({
            ...context.user,
            name: e.target.value,
          });
        }}
      />
    </div>
  );
}

export default Setting;
