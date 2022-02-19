import axios from "axios";
import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Search from "../components/Search";
import CharacterCarousel from "../components/CharacterCarousel";
import ChoosePage from "../components/ChoosePage";

const Home = ({
	currentPage,
	setCurrentPage,
	limit,
	setLimit,
	count,
	setCount,
}) => {
	const [characterArray, setCharacterArray] = useState([]);
	const [characterSearch, setCharacterSearch] = useState("");

	useEffect(() => {
		try {
			const fetchData = async () => {
				const response = await axios.get(
					`http://localhost:3100/?name=${characterSearch}&limit=${limit}&page=${currentPage}`
				);
				console.log(response.data);
				setCount(response.data.count);
				setCharacterArray(response.data.results);
			};
			fetchData();
		} catch (error) {
			console.log({ error: error.message });
		}
	}, [characterSearch, currentPage, limit]);

	return (
		<div className="page-container">
			<Header />
			<Nav setCurrentPage={setCurrentPage} />
			<Search
				characterSearch={characterSearch}
				setCharacterSearch={setCharacterSearch}
				setCurrentPage={setCurrentPage}
			/>
			<ChoosePage
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				limit={limit}
				setLimit={setLimit}
				count={count}
			/>
			<CharacterCarousel characterArray={characterArray} />
		</div>
	);
};

export default Home;
