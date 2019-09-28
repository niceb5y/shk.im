import React from "react";
import Link from "next/link";

const Header = () => (
	<nav className="navbar navbar-light my-4 px-0">
		<Link href="/" className="navbar-brand mr-auto text-primary">
			<a>SHK.im</a>
		</Link>
	</nav>
);

export default Header;
