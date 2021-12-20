import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/landing/Landing.Page";
import NotFoundPage from "./pages/notFound/NotFound.Page";

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='container'>
				<Router>
					<Routes>
						<Route path='/' element={<LandingPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</Router>
			</div>
			<Footer />
		</div>
	);
}

export default App;
