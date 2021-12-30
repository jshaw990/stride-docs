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
				<div className='categories'>
					<Link to='new-instance' className='item'>
						<i className='icon far fa-plus-square'></i>
						<div className='lg'>Create a New WordPress Instance</div>
					</Link>
					<Link to='adding-analytics' className='item'>
						<i className='icon fas fa-chart-line'></i>
						<div className='lg'>Adding Google Analytics</div>
					</Link>
					<Link to='downloads' className='item'>
						<i className='icon far fa-save'></i>
						<div className='lg'>WordPress Downloads</div>
					</Link>
				</div>
				<div className='categories'>
					<Link to='changing-home' className='item'>
						<i className='icon fas fa-home'></i>
						<div className='lg'>Changing Site Home Page</div>
					</Link>
					<Link to='changing-icon' className='item'>
						<i className='icon fas fa-atom'></i>
						<div className='lg'>Changing Site Icon</div>
					</Link>
					<Link to='changing-title' className='item'>
						<i className='icon fas fa-signature'></i>
						<div className='lg'>Changing Site Title</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default WordPressPage;
