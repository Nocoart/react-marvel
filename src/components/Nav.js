import React from "react";
import { Link } from "react-router-dom";

import "../styles/nav.css";

const Nav = () => {
	return (
		<div className="nav-container">
			<nav>
				<ul>
					<Link to={"/"}>
						<li>
							{/* <FontAwesomeIcon icon="mask" className="header-icon" /> */}
							<span>PERSONNAGES</span>
						</li>
					</Link>
					<Link to={"/comics"}>
						<li>
							{/* <FontAwesomeIcon icon="book-open" className="header-icon" /> */}
							<span>COMICS</span>
						</li>
					</Link>
					<Link to={"/favourites"}>
						<li>
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
