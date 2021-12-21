import React from "react";
import { Link } from "react-router-dom";

import "./Landing.styles.scss";

const LandingPage = () => {
	return (
		<div className='landing-page'>
			<div className='xl title'>Development Practices</div>
			<div className='lg'>
				A how-to guide of practices to improve development and create more
				efficiently
			</div>
			<div className='categories'>
				<Link to='/wordpress' className='item'>
					<i class='icon fab fa-wordpress-simple'></i>
					<div className='lg'>WordPress</div>
				</Link>
				<div className='item'>
					<i class='icon far fa-file-alt'></i>
					<div className='lg'>ClickSpace Forms</div>
				</div>
				<div className='item'>
					<i class='icon far fa-file-code'></i>
					<div className='lg'>Code Snippets</div>
				</div>
				<div className='item'>
					<i class='icon fas fa-swatchbook'></i>
					<div className='lg'>Miscellaneous</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
