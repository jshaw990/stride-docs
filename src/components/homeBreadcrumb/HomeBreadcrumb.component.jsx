import React from 'react' 
import { Link } from 'react-router-dom'

import './HomeBreadcrumb.styles.scss'

import CustomButton from '../customButton/CustomButton.component'

const HomeBreadcrumb = () => {
    return (
        <div className='home-breadcrumb'>
            <Link to='/'>
                <CustomButton>Home</CustomButton>
            </Link>
        </div>
    )
}

export default HomeBreadcrumb