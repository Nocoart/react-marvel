import axios from "axios";
import React, { useState, useEffect } from "react";

import HomeCarousel from "../components/HomeCarousel";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Search from "../components/Search";

const Home = () => {
	const [characterCarrousel, setCharacterCarrousel] = useState([]);
	const [characterSearch, setCharacterSearch] = useState("");
	const [limit, setLimit] = useState(100);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`http://localhost:3100/?name=${characterSearch}&limit=${limit}`
			);
			console.log(response.data.results);
			console.log(characterSearch);
			setCharacterCarrousel(response.data.results);
		};
		fetchData();
	}, [characterSearch]);
	return (
		<div className="page-container">
			<Header />
			<Nav />
			<Search
				characterSearch={characterSearch}
				setCharacterSearch={setCharacterSearch}
			/>
			<HomeCarousel characterCarrousel={characterCarrousel} />
		</div>
	);
};

export default Home;
