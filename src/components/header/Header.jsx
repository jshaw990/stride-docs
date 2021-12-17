import React from "react";

import "./Header.scss";

import StrideLogo from "../../assets/images/logo60.png";

const Header = () => {
	return (
		<div className='header'>
			<div className='left'>
				<a href='/'>
					<img src={StrideLogo} alt='' className='logo' />
				</a>
				<div className='logo-text bold'>STRIDE Management Corp.</div>
			</div>
		</div>
	);
};

export default Header;
