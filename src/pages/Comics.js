import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Search from "../components/Search";
import ComicsCarousel from "../components/ComicsCarousel";

const Comics = () => {
	const [comicsArray, setComicsArray] = useState([]);
	const [comicsSearch, setComicsSearch] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://localhost:3100/comics`);
				console.log(response.data.results);
				setComicsArray(response.data.results);
			} catch (error) {}
		};
		fetchData();
	}, []);
	return (
		<div>
			<Header />
			<Nav />
			<Search comicsSearch={comicsSearch} setComicsSearch={setComicsSearch} />
			<ComicsCarousel comicsArray={comicsArray} />
		</div>
	);
};

export default Comics;
