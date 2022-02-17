import axios from "axios";
import React, { useState, useEffect } from "react";

import HomeCarousel from "../components/HomeCarousel";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Home = () => {
	const [characterCarrousel, setCharacterCarrousel] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(`http://localhost:3100/`);
			console.log(response.data.results);
			setCharacterCarrousel(response.data.results);
		};
		fetchData();
	}, []);
	return (
		<div className="page-container">
			<Header />
			<Nav />
			<div className="banner-container">
				<HomeCarousel characterCarrousel={characterCarrousel} />
			</div>
			home
		</div>
	);
};

export default Home;
