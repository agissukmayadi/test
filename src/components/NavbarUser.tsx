import NavbarUserAvatar from "./NavbarUserAvatar";
import NavbarUserName from "./NavbarUserName";

function NavbarUser(props: any) {
  return (
    <div className="flex gap-x-4 items-center justify-between w-full md:w-fit">
      <NavbarUserName></NavbarUserName>
      <NavbarUserAvatar></NavbarUserAvatar>
    </div>
  );
}

export default NavbarUser;
