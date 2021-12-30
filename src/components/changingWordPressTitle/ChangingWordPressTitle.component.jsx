import React from "react";

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

import wp9 from "../../assets/images/wordpress/wp-install-9.webp";

const ChangingWordPressTitle = () => {
	return (
		<div className='changing-wordpress-title step-page'>
			<HomeBreadcrumb />
			<div className='xl title'>Changing the Site Title</div>
			<div>
				To change the website title or tagline on a WordPress site use the
				following steps as a guide.
			</div>
			<div className='step'>
				<div className='step-num lg'>Step 1</div>
				<div className='step-item'>
					From the WordPress Dashboard navigate to{" "}
					<i>Appearance -> Customize</i>
				</div>
			</div>
			<div className='step'>
				<div className='step-num lg'>Step 2</div>
				<div className='step-item'>
					On the <i>You are customizing {"[SITE TITLE]"}</i> page, click{" "}
					<i>Site Identity</i>
				</div>
			</div>
			<div className='step'>
				<div className='step-num lg'>Step 3</div>
				<div className='step-item'>
					Click the <i>Site Title</i> text box and write in your new title
				</div>
			</div>
			<div className='step'>
				<div className='step-num lg'>Step 4</div>
				<div className='step-item'>
					Click the <i>Site Tagline</i> text box and write in your new tagline
				</div>
			</div>
			<div className='step'>
				<div className='step-num lg'>Step 5</div>
				<div className='step-item'>
					<div>
						To ensure the title has been changed, you should see the new title
						in your browser's tab.{" "}
					</div>
					<div>
						If you see the correct title, click the <i>Publish</i> button
					</div>
					<img src={wp9} className='small-image image' alt='' />
				</div>
			</div>
		</div>
	);
};

export default ChangingWordPressTitle;
