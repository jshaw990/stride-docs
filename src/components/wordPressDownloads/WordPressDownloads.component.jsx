import React from "react";

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

import "./WordPressDownloads.styles.scss";

import ElementorPro from "../../assets/downloads/elementor-pro-3.0.10.zip";
import HelloElementor from "../../assets/downloads/hello-elementor.2.3.1.zip";
import WCLMSSettings from "../../assets/downloads/wlcms-settings.json";

const WordPressDownloads = () => {
	return (
		<div className='wordpress-downloads'>
			<HomeBreadcrumb />
			<div className='title xl'>Essential WordPress Downloads</div>
			<div className='items'>
				<div className='item'>
					<a href={ElementorPro} download>
						<i className='icon fas fa-folder-open'></i>
						<div className='lg'>Elementor Pro Plugin</div>
					</a>
				</div>
				<div className='item'>
					<a href={HelloElementor} download>
						<i className='icon fas fa-paste'></i>
						<div className='lg'>Hello Elementor Theme</div>
					</a>
				</div>
				<div className='item'>
					<a href={WCLMSSettings} download>
                        <i className="icon fas fa-toolbox"></i>
						<div className='lg'>White Label CMS Settings</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default WordPressDownloads;
