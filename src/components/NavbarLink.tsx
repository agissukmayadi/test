import Link from "next/link";

function NavbarLink() {
  return (
    <div className="hidden gap-x-4 md:flex">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default NavbarLink;
