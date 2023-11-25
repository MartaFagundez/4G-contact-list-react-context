import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-white shadow-sm">
			<div className="container">
				<Link to="/" className="navbar-brand font-logo fw-bold color-blue">MyAgenda</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink to="/" className="nav-link">Home</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to="/contacts" className="nav-link">Contacts</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
