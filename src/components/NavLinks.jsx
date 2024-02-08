import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ menuList }) => {
    
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      className={`rounded-md p-1 ${
        pathname === menuList.url && "bg-slate-800 text-white"
      }`}
      href={menuList.url}
    >
      {menuList.title}
    </Link>
  );
};

export default NavLink;
