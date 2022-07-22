import React from 'react'
import Navbar from './Navbar'

function Menu(props) {

    const { isSmallScreen, handleOpen } = props


    return (
        <div className='menu-ctn'>
            <Navbar
                isSmallScreen={isSmallScreen}
                {...props}
                handleOpen={handleOpen}
            />

        </div>
    )
}

export default Menu