import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.component";
import Footer from "./components/footer/Footer.component";
import NotFoundPage from "./pages/notFound/NotFound.Page";
import LandingPage from "./pages/landing/Landing.Page";
import WordPressPage from "./pages/wordpress/WordPress.page";

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='container'>
				<BrowserRouter>
					<Routes>
						<Route exact path='/' element={<LandingPage />} />
						<Route path='wordpress' element={<WordPressPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</div>
	);
}

export default App;
