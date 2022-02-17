import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favourites from "./pages/Favourites";
import Character from "./pages/Character";

//fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/character/:id" element={<Character />} />
					<Route path="/comics" element={<Comics />} />
					<Route path="/favourites" element={<Favourites />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
