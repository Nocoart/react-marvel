import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/marvel-logo.png";
import "../styles/header.css";
import Banner from "./Banner";
import Nav from "./Nav";

const Header = () => {
	return (
		<header className="page-container">
			<Banner />
			<img src={logo} alt="logo-marvel" className="header-logo-marvel-big" />
		</header>
	);
};

export default Header;
