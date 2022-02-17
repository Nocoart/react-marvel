import React from "react";
import charactersBanner from "../assets/img/character-banner.jpg";
import comicsBanner from "../assets/img/comics-banner.jpg";

import "../styles/banner.css";
import { useLocation } from "react-router-dom";

const Banner = () => {
	const { pathname } = useLocation();
	return (
		<div className="banner-container">
			<img
				src={
					pathname === "/"
						? charactersBanner
						: pathname === "/comics"
						? comicsBanner
						: undefined
				}
				alt=""
				className="banner-img"
			/>
			<div className="banner-masque"></div>
		</div>
	);
};

export default Banner;
