import React from "react";
import Image from "next/image";

function NavBar() {
  return (
    <div className="h-16 flex items-center px-5 md:px-10 text-lg justify-between border-b">
      <div className="w-12 h-12 overflow-hidden flex items-center justify-center rounded-full cursor-pointer">
        <Image src="/logo/logo.png" alt="logo" width={500} height={500} />
      </div>
      <div className=" bg-white/20 rounded-md cursor-pointer">
        <h1 className="font-roboto px-2 py-1">Admin</h1>
      </div>
    </div>
  );
}

export default NavBar;
