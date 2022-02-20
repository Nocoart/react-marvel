import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ChoosePage from "../components/ChoosePage";
import axios from "axios";
import Cookies from "js-cookie";
import CharacterCarousel from "../components/CharacterCarousel";
import ComicsCarousel from "../components/ComicsCarousel";

const Favourites = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [favouriteCharacter, setFavouriteCharacter] = useState([]);
	const [favouriteComics, setFavouriteComics] = useState([]);
	const cookieIdArray = Object.keys(Cookies.get());

	useEffect(() => {
		const favCharacterArray = [];
		const favComicsArray = [];
		const fetchData = async () => {
			console.log(Cookies.get());
			for (let i = 0; i < cookieIdArray.length; i++) {
				const foundCookie = JSON.parse(Cookies.get(cookieIdArray[i]));
				console.log(foundCookie);
				if (foundCookie.name) favCharacterArray.push(foundCookie);
				else favComicsArray.push(foundCookie);
			}
			setFavouriteCharacter(favCharacterArray);
			setFavouriteComics(favComicsArray);
			setIsLoading(false);
			console.log(favComicsArray);
		};
		fetchData(Cookies.get());
	}, []);

	return isLoading ? (
		<p>LOADING</p>
	) : (
		<div>
			<Header />
			<Nav />
			<ChoosePage />
			<h1>Favourites Characters</h1>
			<CharacterCarousel characterArray={favouriteCharacter} />
			<h1>favourites Comics</h1>
			<ComicsCarousel comicsArray={favouriteComics} />
		</div>
	);
};

export default Favourites;
