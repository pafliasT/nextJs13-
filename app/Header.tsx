import Link from "next/link";
import React from "react";

// Header navigation
function Header() {
  return (
    <header className="p-5 bg-blue-500 flex space-x-2 " >
      <Link href="/" className=" px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home
      </Link>
      <Link href="/todos" className=" px-2 py-1 bg-white text-blue-500 rounded-lg">
        Todos
      </Link>
      <Link href="/search" className=" px-2 py-1 bg-white text-blue-500 rounded-lg">
        Search
      </Link>
      {/* <Link href="/developer" className=" px-2 py-1 bg-white text-blue-500 rounded-lg">
        Developer
      </Link> */}
    </header>
  );
}

export default Header;
