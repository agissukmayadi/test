import { useUserContext } from "@/context/user-context";
import { useContext } from "react";

function NavbarUserName(props: any) {
  const [state, dispatch] = useUserContext();
  return (
    <>
      {state.user.name ? (
        <span className="" onClick={state.alert}>
          {state.user.name}
        </span>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default NavbarUserName;
