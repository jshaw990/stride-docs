import React from "react";

import "./Footer.scss";

import StrideBBB from "../../assets/images/bbb-stride.png";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='logo-cont'>
				<a href='https://stridemgmt.com/' target='_blank' rel='noreferrer'>
					<img src={StrideBBB} alt='' className='logo' />
				</a>
			</div>
			<div className='flex'>
				<div className='address'>
					<div className='bold'>Headquarters:</div>
					<div>3950 12 Street NE</div>
					<div>Calgary, AB</div>
					<div>T2E 8H9</div>
				</div>
				<div class='phone'>
					<div>Toll Free: 1 (866) 508 - 7313</div>
					<div>Phone: (403) 508 - 7313</div>
					<div>Fax: (403) 262 - 5888</div>
					<div>Email: info@stridemgmt.com</div>
				</div>
			</div>
			<div className='credit'>
				<div>
					<a href='https://github.com/jshaw990'>Authored by: Jayden Shaw</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
