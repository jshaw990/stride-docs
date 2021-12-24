import React from "react";
import { useNavigate } from "react-router-dom";

import "./HomeBreadcrumb.styles.scss";

import CustomButton from "../customButton/CustomButton.component";

const HomeBreadcrumb = () => {
	const navigate = useNavigate();

	return (
		<div className='home-breadcrumb'>
			<CustomButton onClick={() => navigate(-1)}>
				<i className='icon fas fa-chevron-left'></i> Back
			</CustomButton>
		</div>
	);
};

export default HomeBreadcrumb;
