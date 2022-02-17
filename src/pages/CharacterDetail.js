import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import "../styles/character.css";

const CharacterDetail = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({});
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(`http://localhost:3100/character/${id}`);
			console.log(response.data);
			setData(response.data);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	return isLoading ? (
		<div>Loading</div>
	) : (
		<div>
			<div className="character-container-height">
				<div className="character-container-width">
					<div className="character-picture-container">
						<img
							src={data.thumbnail.path + "." + data.thumbnail.extension}
							alt=""
							className="character-img"
						/>
						<div className="character-masque-right"></div>
						<div className="character-masque-bottom"></div>
					</div>
				</div>
			</div>

			<Nav />
		</div>
	);
};

export default CharacterDetail;
