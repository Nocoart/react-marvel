import React from "react";
import logo from "../assets/img/marvel-logo.png";
import "../styles/header.css";
import Banner from "./Banner";

const Header = () => {
	return (
		<header className="page-container">
			<Banner />
			<img src={logo} alt="logo-marvel" className="header-logo-marvel-big" />
		</header>
	);
};

export default Header;
