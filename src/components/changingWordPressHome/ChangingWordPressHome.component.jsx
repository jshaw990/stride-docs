import React from "react";

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

import wp10 from "../../assets/images/wordpress/wp-install-10.webp";

const ChangingWordPressHome = () => {
	return (
		<div className='changing-wordpress-home step-page'>
			<HomeBreadcrumb />
			<div className='xl title'>Changing the Home Page</div>
			<div>
				To change the website home/landing page on a WordPress site use the
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
					<i>Homepage Settings</i>
				</div>
			</div>
			<div className='step'>
				<div className='step-num lg'>Step 3</div>
				<div className='step-item'>
					Select the <i>A static page</i> radio under{" "}
					<i>Your homepage displays</i>
				</div>
			</div>
			<div className='step'>
				<div className='step-num lg'>Step 4</div>
				<div className='step-item'>
					<div>Under the <i>Homepage</i> select dropdown select your desired home
					page, you should see a preview on the right hand side</div>
					<img src={wp10} className='small-image image' alt='' />
				</div>
			</div>
			<div className='step'>
				<div className='step-num lg'>Step 5</div>
				<div className='step-item'>
					<div>
						Click <i>Publish</i> and return to the WordPress Dashboard.
					</div>
					<div>
						Your can test to ensure the home page was updated by hovering over
						your site title and clicking on <i>View Site</i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangingWordPressHome;
