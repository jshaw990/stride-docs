import React from "react";
import { Link } from "react-router-dom";

import "./Miscellaneous.styles.scss";

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

const MiscellaneousPage = () => {
	return (
		<div className='miscellaneous-page'>
			<HomeBreadcrumb />
			<div className='content'>
				<div className='xl title'>Miscellaneous</div>
				<div className='categories'>
					<Link to='web-p-vs-png' className='item'>
						<i className='icon far fa-images'></i>
						<div className='lg'>WebP vs PNG</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MiscellaneousPage;
