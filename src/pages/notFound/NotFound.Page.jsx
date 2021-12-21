import React from "react";
import { useLocation, Link } from "react-router-dom";

import "./NotFound.styles.scss";

const NotFoundPage = () => {
	const location = useLocation();

	return (
		<div className='not-found-page'>
			<div className='stride-blue bold uppercase'>404 Error</div>
			<div className='bold xxl'>Page not found</div>
			<div className=''>
				Sorry, the page {location.pathname} could not be found.
			</div>
			<div className='stride-blue bold go-home'>
				<Link to='/'>
					Go back home <i class='fas fa-arrow-right'></i>
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
