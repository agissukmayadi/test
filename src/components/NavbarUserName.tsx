import { AppContext, useAppContext } from "@/context/AppProvider";
import { useContext } from "react";

function NavbarUserName(props: any) {
  const context = useAppContext();
  return (
    <>
      {context.user.name ? (
        <span className="" onClick={context.alert}>
          {context.user.name}
        </span>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default NavbarUserName;
