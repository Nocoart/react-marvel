import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favourites from "./pages/Favourites";
import CharacterDetail from "./pages/CharacterDetail";
import Footer from "./components/Footer";

//fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faSearch,
	faHeart,
	faBookOpen,
	faMask,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faHeart, faBookOpen, faMask);

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
				<Footer />
			</Router>
		</div>
	);
}

export default App;
