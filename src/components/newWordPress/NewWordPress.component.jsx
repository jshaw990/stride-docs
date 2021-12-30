import React from 'react' 

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

import wp1 from '../../assets/images/wordpress/wp-install-0.webp'
import wp2 from '../../assets/images/wordpress/wp-install-1.webp'
import wp3 from '../../assets/images/wordpress/wp-install-2.webp'
import wp4 from '../../assets/images/wordpress/wp-install-3.webp'
import wp5 from '../../assets/images/wordpress/wp-install-4.webp'
import wp6 from '../../assets/images/wordpress/wp-install-5.webp'
import wp7 from '../../assets/images/wordpress/wp-install-6.webp'
import wp8 from '../../assets/images/wordpress/wp-install-7.webp'

const NewWordPress = () => {
    return (
        <div className='new-wordpress step-page'>
            <HomeBreadcrumb />
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
            <div className='step'>
                <div className='step-num lg'>Step 17</div>
                <div className='step-item'>
                    <li>Navigate to <i>Settings -> White Label CMS</i> and press the <i>Skip</i> button</li>
                    <li>Scroll to the bottom and select <i>import settings</i></li>
                    <li>Drag and drop the <i>wlcms-settings.json</i> file into the box</li>
                    <li>Press <i>Save</i></li>
                    <div>You can confirm this action was completed successfully if the STRIDE logo appears on the top left of the WordPress Dashboard</div>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 18</div>
                <div className='step-item'>
                    Navigate to <i>Dashboard -> Updates</i> and update any themes/plugins that have a newer version.
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 19</div>
                <div className='step-item'>
                    <li>Navigate to <i>Posts</i> and delete all of the default WordPress Posts</li>
                    <li>Navigate to <i>Pages</i> and delete all of the default WordPress Pages</li>
                    <li>Navigate to <i>Comments</i> and delete all of the default WordPress Comments</li>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 20</div>
                <div className='step-item'>
                    <li>Navigate to <i>Templates</i> and select <i>Add New</i></li>
                    <li>Select <i>Page</i> as the type of template and name it <i>Coming-Soon</i> and select <i>CREATE TEMPLATE</i></li>
                    <li>Build a coming soon template</li>
                    <li>Within the template builder, select the hamburger icon in the top left hand corner</li>
                    <li>Select <i>Site Settings -> Custom CSS</i></li>
                    <li>Paste in the following CSS:</li>
                    <code>{".site-header { display: none !important; } .page-header { display: none !important; }"}</code>
                    <li>Click <i>Update</i></li>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 21</div>
                <div className='step-item'>
                    <li>From the WordPress Dashboard, navigate to <i>Elementor -> Tools</i> and select the <i>Maintenance Mode</i> tab</li>
                    <li>Change the <i>Choose Mode</i> dropdown to <i>Coming Soon</i></li>
                    <li>Select your <i>Coming Soon</i> template for the <i>Choose Template</i> option</li>
                    <li>Press <i>Save Changes</i></li>
                    <img src={wp7} alt='' className='image'/>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 22</div>
                <div className='step-item'>
                    <li>From the WordPress Dashboard, navigate to <i>Users -> Add New</i></li>
                    <li>Enter the Graphics ID into as the Username field</li>
                    <li>Enter the Graphics email in the email address field</li>
                    <li>Change the Role to <i>Administrator</i></li>
                    <li>Note the Username and Password in a text document for addition to the Masterpass</li>
                    <li>Click <i>Add New User</i></li>
                    <li>Repeat the following steps for all Graphics Accounts</li>
                    <img src={wp8} alt='' className='image'/>
                </div>
            </div>
            <div className='lg'>At this point you are ready to begin development on the new WordPress website!</div>
        </div>
    )
}

export default NewWordPress