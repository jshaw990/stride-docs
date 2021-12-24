import React from 'react' 

import './WordPressDownloads.styles.scss'

import ElementorPro from '../../assets/downloads/elementor-pro-3.0.10.zip'
import HelloElementor from '../../assets/downloads/hello-elementor.2.3.1.zip'
import WCLMSSettings from '../../assets/downloads/wlcms-settings.json'

const WordPressDownloads = () => {
    return (
        <div className='wordpress-downloads'>
            <div className='title xl'>Essential WordPress Downloads</div>
            <div className='items'>
                <div><a href={ElementorPro} download>Elementor Pro</a></div>
                <div><a href={HelloElementor} download>Hello Elementor Theme</a></div>
                <div><a href={WCLMSSettings} download>White Label CMS Settings</a></div>
            </div>
        </div>
    )
}

export default WordPressDownloads