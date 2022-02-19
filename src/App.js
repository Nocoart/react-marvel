import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favourites from "./pages/Favourites";
import CharacterDetail from "./pages/CharacterDetail";

//fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faHeart);

function App() {
	const [currentPage, setCurrentPage] = useState(1);
	const [limit, setLimit] = useState(100);
	const [count, setCount] = useState();

	return (
		<div className="App">
			<Router>
				<ScrollToTop>
					<Routes>
						<Route
							path="/"
							element={
								<Home
									currentPage={currentPage}
									setCurrentPage={setCurrentPage}
									limit={limit}
									setLimit={setLimit}
									count={count}
									setCount={setCount}
								/>
							}
						/>
						<Route path="/character/:id" element={<CharacterDetail />} />
						<Route
							path="/comics"
							element={
								<Comics
									currentPage={currentPage}
									setCurrentPage={setCurrentPage}
									limit={limit}
									setLimit={setLimit}
									count={count}
									setCount={setCount}
								/>
							}
						/>

						<Route path="/favourites" element={<Favourites />} />
					</Routes>
				</ScrollToTop>
			</Router>
		</div>
	);
}

export default App;
