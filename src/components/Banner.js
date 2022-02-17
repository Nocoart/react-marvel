import React from "react";
import banner from "../assets/img/banner.jpg";
import "../styles/banner.css";

const Banner = () => {
	return (
		<div className="banner-container">
			<img src={banner} alt="" className="banner-img" />
			<div className="banner-masque"></div>
		</div>
	);
};

export default Banner;
