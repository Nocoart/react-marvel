import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/likeButton.css";

const LikeButton = ({ _id }) => {
	const [like, setLike] = useState(false);

	useEffect(() => {
		if (Cookies.get(_id)) {
			setLike(true);
		}
	}, []);

	const handleLike = () => {
		if (Cookies.get(_id)) {
			setLike(false);
			Cookies.remove(_id);
		} else {
			setLike(true);
			Cookies.set(_id);
		}
	};
	return (
		<FontAwesomeIcon
			icon={"fa-heart"}
			className={like ? "heart red" : "heart"}
			onClick={handleLike}
		/>
	);
};

export default LikeButton;
