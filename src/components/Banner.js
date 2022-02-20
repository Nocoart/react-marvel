import React from "react";
import charactersBanner from "../assets/img/character-banner.jpg";
import favouriteBanner from "../assets/img/favourite-banner.jpeg";
import bannerGif from "../assets/img/marvel-gif.gif";

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
						? bannerGif
						: favouriteBanner
				}
				alt=""
				className="banner-img"
			/>
			<div className="banner-masque"></div>
		</div>
	);
};

export default Banner;
