import React from "react";
import { Link } from "react-router-dom";

import "../styles/comicsCarousel.css";

const ComicsCard = ({ title, thumbnail, description, _id }) => {
	return (
		<Link to={`/comics/${_id}`} className="comics-cards">
			<div className="comics-card-name">{title}</div>
			<div className="comics-card-thumb">
				<img src={thumbnail.path + "." + thumbnail.extension} alt="" />
			</div>
			<div className="comics-cards-description">{description}</div>
		</Link>
	);
};

export default ComicsCard;
