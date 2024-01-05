import Link from "next/link";
import React from "react";

const NavItem = ({ title, items, path }: any) => {
  console.log({ items });

  return (
    <li className="relative inline-block text-left">
      <Link
        href={path}
        className="inline-flex justify-center items-center w-full rounded-md xl:px-2 py-2 xl:mx-2 mx-0 text-lg font-medium text-gray-800 hover:text-purple-600 hover:transition-all "
      >{title}</Link>
    </li>
  );
};

export default NavItem;
