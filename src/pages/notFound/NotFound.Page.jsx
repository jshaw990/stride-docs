import React from "react";
import { useLocation } from "react-router-dom";

import "./NotFound.scss";

const NotFoundPage = () => {
	const location = useLocation();

	return (
		<div className='not-found-page'>
			<div className='stride-blue bold uppercase'>404 Error</div>
			<div className='bold big'>Page not found</div>
			<div className=''>
				Sorry, the page {location.pathname} could not be found.
			</div>
			<div className='stride-blue bold go-home'>
				Go back home <i class='fas fa-arrow-right'></i>
			</div>
		</div>
	);
};

export default NotFoundPage;
