import { AppContext, useAppContext } from "@/context/AppProvider";
import Image from "next/image";
import { useContext } from "react";
function NavbarUserAvatar(props: any) {
  const context = useAppContext();
  return (
    <>
      {context.user.avatar ? (
        <Image
          src={context?.user?.avatar}
          alt="avatar"
          width={50}
          height={50}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default NavbarUserAvatar;
