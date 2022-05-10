import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Buy from "./Components/Buy";
import About from "./Components/About";

function App() {
	return (
		<Routes>
			  <Route path="/" element={<Home />} />
			  <Route path="/buy" element={<Buy />} />
			  <Route path="/about" element={<About />} />
		</Routes>
  );
}

export default App;
