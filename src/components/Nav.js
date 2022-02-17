import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/nav.css";

const Nav = () => {
	const { pathname } = useLocation();
	return (
		<div className="nav-container">
			<nav>
				<ul>
					<Link to={"/"}>
						<li className={pathname === "/" ? "active" : undefined}>
							{/* <FontAwesomeIcon icon="mask" className="header-icon" /> */}
							<span>PERSONNAGES</span>
						</li>
					</Link>
					<Link to={"/comics"}>
						<li className={pathname === "/comics" ? "active" : undefined}>
							{/* <FontAwesomeIcon icon="book-open" className="header-icon" /> */}
							<span>COMICS</span>
						</li>
					</Link>
					<Link to={"/favourites"}>
						<li className={pathname === "/favourites" ? "active" : undefined}>
							{/* <FontAwesomeIcon icon="heart" className="header-icon" /> */}
							<span>FAVORIS</span>
						</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
