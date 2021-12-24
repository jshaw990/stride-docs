import React from 'react' 

import wp1 from '../../assets/images/wordpress/wp-install-0.png'
import wp2 from '../../assets/images/wordpress/wp-install-1.png'
import wp3 from '../../assets/images/wordpress/wp-install-2.png'
import wp4 from '../../assets/images/wordpress/wp-install-3.png'
import wp5 from '../../assets/images/wordpress/wp-install-4.png'
import wp6 from '../../assets/images/wordpress/wp-install-5.png'

import './NewWordPress.styles.scss'

const NewWordPress = () => {
    return (
        <div className='new-wordpress'>
            <div className='xl title'>Creating a New WordPress Instance</div>
            <div>To create a new website with WordPress use the following steps as a guide.</div>
            <div className='step'>
                <div className='step-num lg'>Step 1</div>
                <div className='step-item'>
                    Log into <a href='https://a2plvcpnl5331.prod.iad2.secureserver.net:2083/cpsess5689716943/frontend/paper_lantern/index.html' target='_blank' rel='noreferrer'>cPanel</a> using the STRIDE Creative Team credentials
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 2</div>
                <div className='step-item'>
                    Scroll down and locate <i>Web Applications</i> and click <i>view more</i>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 3</div>
                <div className='step-item'>
                    Click on <i>Application Browser</i>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 4</div>
                <div className='step-item'>
                    Scroll to <i>Apps for: Content Mangement</i> and click on <i>WordPress</i>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 5</div>
                <div className='step-item'>
                    Click on <i>install this application</i>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 6</div>
                <div className='step-item'>
                    Scroll down and locate <i>Web Applications</i>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 7</div>
                <div className='step-item'>
                    Update the following items:
                    <li>Use the drop down to select the correct domain you wish to install WordPress on</li>
                    <li>If applicable: add a directory ie. <i>/_2022</i></li>
                    <img src={wp1} alt='' className='image'/>
                    <li>Change the Adminisrator Username to your Graphics ID ie. <i>Graphics.Six</i></li>
                    <li>Click <i>show password</i> and save the generated password to an external text file</li>
                    <li>Update the Administrator Email to your email address</li>
                    <li>Change the Website Title and Website Tagline to a relevant website title ie. <i>WinWin Staff Lottery</i></li>
                    <img src={wp2} alt='' className='image'/>
                    <div>Once you have confimed the steps above have been completed correctly, click <i>Install</i></div>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 8</div>
                <div className='step-item'>
                    Wait for WordPress to be installed successfully on cPanel
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 9</div>
                <div className='step-item'>
                    Once the WordPress instance has been successfully installed, select the <i>domain/wp-admin</i>
                    <img src={wp3} alt='' className='image'/>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 10</div>
                <div className='step-item'>
                    <li>Select: <i>Exit to WordPress Dashboard</i> from the WordPress Theme Selction</li>
                    <li>Select: <i>Yes I'm sure</i></li>
                    <li>Select: <i>No thanks, I just want to exit</i></li>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Once you have gotten through all the WordPress mumbo jumbo above, you are now ready to properly setup the WordPress site for STRIDE's usage</div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 11</div>
                <div className='step-item'>
                    Navigate to <i>Plugins -> Installed Plugins</i> and deactivate all plugins 
                    <img src={wp4} alt='' className='image'/>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 12</div>
                <div className='step-item'>
                    Once you have deactivated all plugins, delete the plugins located within the WordPress instance
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 13</div>
                <div className='step-item'>
                    <li>Click on the <i>Add New</i> button beside the Plugins title</li>
                    <li>Click on the <i>Upload Plugin</i> button beside the Add Plugins title</li>
                    <li>Drag and drop the <i>elementor-pro-3.0.10.zip</i> file and click the <i>Install Now</i> button</li>
                    <img src={wp5} alt='' className='image'/>
                    <li>Once installed select <i>Activate Plugin</i></li>
                    <li>After Elementor Pro has been installed, install the Elementor Plugin by selecting <i>Install Elementor Now</i> and then <i>Activate Plugin</i></li>
                    <img src={wp6} alt='' className='image'/>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 14</div>
                <div className='step-item'>
                    <div>Navigate to <i>Apperance -> Themes</i> and select <i>Add New</i></div>
                    <li>Select <i>Upload Theme</i></li>
                    <li>Drag and Drop <i>hello-elementor2.3.1.zip</i> and select <i>Install Now</i></li>
                    <li>After uploading the theme, select <i>Activate</i></li>
                    <li>Select <i>Connect & Activate</i> to activate the Elementor License, credentials can be found on MasterPass</li>
                    <li>Ensure when activating you delesect the <i>super construbutor</i> button</li>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 15</div>
                <div className='step-item'>
                    Navigate back to <i>Apperance -> Themes</i> and select the default WordPress themes ie. <i>Twenty Nineteen</i> and delete all the irrelevant themes
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 16</div>
                <div className='step-item'>
                    Navigate to <i>Plugins -> Add New</i> and search for <i>White Label CMS</i> then <i>Install</i> and then <i>Activate</i>
                </div>
            </div>
        </div>
    )
}

export default NewWordPress