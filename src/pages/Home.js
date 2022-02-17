import axios from "axios";
import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Search from "../components/Search";
import CharacterCarousel from "../components/CharacterCarousel";

const Home = () => {
	const [characterArray, setCharacterArray] = useState([]);
	const [characterSearch, setCharacterSearch] = useState("");
	const [comicsSearch, setComicsSearch] = useState("");
	const [limit, setLimit] = useState(100);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`http://localhost:3100/?name=${characterSearch}&limit=${limit}`
			);
			console.log(response.data.results);
			setCharacterArray(response.data.results);
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
			<CharacterCarousel characterArray={characterArray} />
		</div>
	);
};

export default Home;
