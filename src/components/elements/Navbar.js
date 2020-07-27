import React, { useState } from 'react';

export function NavItem(props) {
	const [ open, setOpen ] = useState(false);
	return (
		<li className="nav-item">
			<span className="icon-button" onClick={() => setOpen(!open)}>
				{props.icon}
			</span>
			{open && props.children}
		</li>
	);
}

export function Navbar(props) {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">{props.children}</ul>
		</nav>
	);
}
