import React from "react";
import { Link } from "react-router-dom";

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

import "./WordPress.styles.scss";

const WordPressPage = () => {
	return (
		<div className='wordpress-page'>
			<HomeBreadcrumb />
			<div className='content'>
				<div className='xl title'>WordPress</div>
				<div className='items'>
				<div>
						<Link to='new-instance'>Create a New WordPress Instance</Link>
					</div>
					<div>
						<Link to='downloads'>WordPress Downloads</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WordPressPage;
