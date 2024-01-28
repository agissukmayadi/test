import { useContext } from "react";
import NavbarLink from "./NavbarLink";
import NavbarUser from "./NavbarUser";
import { AppContext } from "@/context/AppProvider";

function Navbar(props: any) {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <nav className=" bg-blue-600 dark:bg-slate-800 text-white w-full flex  md:justify-between items-center px-16">
      <NavbarLink></NavbarLink>
      <NavbarUser></NavbarUser>
    </nav>
  );
}

export default Navbar;
