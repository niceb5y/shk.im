import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav className="navbar navbar-light my-4 px-0">
      <Link>
        <a href="/" className="navbar-brand mr-auto">
          shk.im
        </a>
      </Link>
    </nav>
  </header>
);

export default Header;
