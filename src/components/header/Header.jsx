import React from "react";

import "./Header.scss";

import StrideLogo from "../../assets/images/logo60.png";

const Header = () => {
	return (
		<div className='header'>
			<div className='left'>
				<a href='/'>
					<img src={StrideLogo} alt='' className='logo' />
					<div className='logo-text bold'>STRIDE Management Corp.</div>
				</a>
			</div>
		</div>
	);
};

export default Header;
