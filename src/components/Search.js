import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/search.css";

const Search = ({ characterSearch, setCharacterSearch }) => {
	const handleChange = (e) => {
		setCharacterSearch(e.target.value);
	};

	return (
		<div className="search-container">
			<div className="search-input">
				<FontAwesomeIcon icon="fa-search" className="search-icon" />
				<input type="text" value={characterSearch} onChange={handleChange} />
			</div>
		</div>
	);
};

export default Search;
