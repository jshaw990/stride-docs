import React from "react";

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

import './WordPress.styles.scss'

const WordPressPage = () => {
	return (
		<div className='wordpress-page'>
			<HomeBreadcrumb />
			<div className='content'>
				<div className='xl title'>WordPress</div>
			</div>
		</div>
	);
};

export default WordPressPage;
