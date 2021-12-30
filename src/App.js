import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.component";
import Footer from "./components/footer/Footer.component";
import NotFoundPage from "./pages/notFound/NotFound.Page";
import LandingPage from "./pages/landing/Landing.Page";
import WordPressPage from "./pages/wordpress/WordPress.page";
import MiscellaneousPage from "./pages/miscellaneous/Miscellaneous.page";
import NewWordPress from "./components/newWordPress/NewWordPress.component";
import WordPressDownloads from "./components/wordPressDownloads/WordPressDownloads.component";
import ChangingWordPressHome from "./components/changingWordPressHome/ChangingWordPressHome.component";
import ChangingWordPressIcon from "./components/changingWordPressIcon/ChangingWordPressIcon.component";
import ChangingWordPressTitle from "./components/changingWordPressTitle/ChangingWordPressTitle.component";
import AddingAnalytics from "./components/addingAnalytics/addingAnalytics.component";
import WebPvsPNG from "./components/webPvsPNG/WebPvsPNG.component";

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='container'>
				<BrowserRouter>
					<Routes>
						<Route exact path='/' element={<LandingPage />} />
						<Route path='wordpress' element={<WordPressPage />} />
						<Route path='wordpress/new-instance' element={<NewWordPress />} />
						<Route path='wordpress/downloads' element={<WordPressDownloads />} />
						<Route path='wordpress/adding-analytics' element={<AddingAnalytics />} />
						<Route path='wordpress/changing-home' element={<ChangingWordPressHome />} />
						<Route path='wordpress/changing-icon' element={<ChangingWordPressIcon />} />
						<Route path='wordpress/changing-title' element={<ChangingWordPressTitle />} />
						<Route path='misc' element={<MiscellaneousPage />} />
						<Route path='misc/web-p-vs-png' element={<WebPvsPNG />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</div>
	);
}

export default App;
