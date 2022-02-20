import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/likeButton.css";

const LikeButton = ({ _id, title, name, thumbnail, description }) => {
	const [like, setLike] = useState(false);

	const cookieObj = JSON.stringify({
		_id: _id,
		title: title,
		name: name,
		thumbnail: thumbnail,
		description: description,
	});

	useEffect(() => {
		if (Cookies.get(_id, cookieObj)) {
			setLike(true);
		}
	}, []);

	const handleLike = (e) => {
		e.preventDefault();
		if (Cookies.get(_id, cookieObj)) {
			Cookies.remove(_id, cookieObj);
			setLike(false);
		} else {
			setLike(true);
			Cookies.set(_id, cookieObj);
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
