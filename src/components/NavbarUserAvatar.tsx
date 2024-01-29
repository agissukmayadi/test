import { useUserContext } from "@/context/user-context";
import Image from "next/image";
import { useContext } from "react";
function NavbarUserAvatar(props: any) {
  const [state, dispatch] = useUserContext();
  return (
    <>
      {state.user.avatar ? (
        <Image src={state.user.avatar} alt="avatar" width={50} height={50} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default NavbarUserAvatar;
