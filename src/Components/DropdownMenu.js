import React from 'react'
import './DropdownMenu.css'
import './Dropdown.css'

const DropdownMenu = (props) => {

    const { isOpen } = props

    console.log(isOpen)

    const scrollToSection = (section) => {
        let target = document.querySelector(section)
        target.scrollIntoView();
    }



    return (<>
        <div className={`dropdownmenu-ctn ${!isOpen ? 'closed' : 'open'}`}>
            {isOpen &&
                <div className={`dropdown${isOpen ? ' open' : ''} `}>
                    <li style={{ color: '#BCA37D' }} onClick={() => { scrollToSection('#home') }}>Home</li>
                    <li onClick={() => { scrollToSection('#artists') }}>Roster</li>
                    {/* <li onClick={() => { scrollToSection('#businesses') }}>Businesses</li> */}
                    <li onClick={() => { scrollToSection('#about') }}>About</li>
                    <li onClick={() => { scrollToSection('#contact') }}>Contact</li>
                </div>
            }
        </div>
    </>
    )
}

export default DropdownMenu