import React from 'react' 

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

import wpa0 from '../../assets/images/wordpress/wp-analytics-0.webp'
import wpa1 from '../../assets/images/wordpress/wp-analytics-1.webp'
import wpa2 from '../../assets/images/wordpress/wp-analytics-2.webp'
import wpa3 from '../../assets/images/wordpress/wp-analytics-3.webp'
import wpa4 from '../../assets/images/wordpress/wp-analytics-4.webp'

const AddingAnalytics = () => {
    return (
        <div className='adding-analytics step-page'>
            <HomeBreadcrumb />
            <div className='xl title'>Adding Google Analytics Code</div>
            <div>To add a Google Analytics code to a WordPress website use the following steps as a guide.</div>
            <div className='step'>
                <div className='step-num lg'>Step 1</div>
                <div className='step-item'>
                    <li>Obtain the analytics code</li>
                    <li>Log into the WordPress Dashboard for the Website</li>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 2</div>
                <div className='step-item'>
                    Navigate to <i>Elementor -> Custom Code</i> and click <i>ADD NEW CUSTOM CODE</i>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 3</div>
                <div className='step-item'>
                    <li>Add a title to the piece of custom code</li>
                    <li>Change the <i>Location: </i> to <i><code>{'< head >'}</code></i></li>
                    <li>Add the code snippet to the body</li>
                    <li>Click <i>Publish</i></li>
                    <img src={wpa0} alt='' className='image'/>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 4</div>
                <div className='step-item'>
                    Set the Condition to: <i>Include: Entire Site</i> and press the <i>Save and Close</i> button
                    <img src={wpa1} alt='' className='image'/>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 5</div>
                <div className='step-item'>
                    <li>Click the <i>Add New</i> button</li>
                    <li>Add a title to the piece of custom code</li>
                    <li>Change the <i>Location: </i> to <i><code>{'< body > - Start'}</code></i></li>
                    <li>Add the code snippet to the body</li>
                    <li>Click <i>Publish</i></li>
                    <img src={wpa2} alt='' className='image'/>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 6</div>
                <div className='step-item'>
                    Set the Condition to: <i>Include: Entire Site</i> and press the <i>Save and Close</i> button
                    <img src={wpa1} alt='' className='image'/>
                </div>
            </div>
            <div className='step'>
                <div className='step-num lg'>Step 7</div>
                <div className='step-item'>
                    Test the website to ensure the Analytics code is setup properly and working by inspecting the code on the website
                    <img src={wpa3} alt='' className='image'/>
                    <img src={wpa4} alt='' className='image'/>
                </div>
            </div>
        </div>
    )
}

export default AddingAnalytics