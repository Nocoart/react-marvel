import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favourites from "./pages/Favourites";
import CharacterDetail from "./pages/CharacterDetail";

//fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:id" element={<CharacterDetail />} />
						<Route path="/comics" element={<Comics />} />
						<Route path="/favourites" element={<Favourites />} />
					</Routes>
				</ScrollToTop>
			</Router>
		</div>
	);
}

export default App;
