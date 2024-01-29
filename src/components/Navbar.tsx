import { useContext } from "react";
import NavbarLink from "./NavbarLink";
import NavbarUser from "./NavbarUser";

function Navbar(props: any) {
  return (
    <nav className=" bg-blue-600 dark:bg-slate-800 text-white w-full flex  md:justify-between items-center px-16">
      <NavbarLink></NavbarLink>
      <NavbarUser></NavbarUser>
    </nav>
  );
}

export default Navbar;
