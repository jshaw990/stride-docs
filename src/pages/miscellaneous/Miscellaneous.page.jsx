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
					<Link to='csv-to-json' className='item'>
						<i className="icon fas fa-exchange-alt"></i>
						<div className='lg'>Converting CSV to JSON</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MiscellaneousPage;
