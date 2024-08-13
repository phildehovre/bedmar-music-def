import React from 'react'
import './DropdownMenu.css'
import './Dropdown.css'

const DropdownMenu = (props) => {

    const { isOpen , isSmallScreen} = props


    const scrollToSection = (section) => {
        let target = document.querySelector(section)
        target.scrollIntoView();
    }



    return (<>
        <div className={`dropdownmenu-ctn ${!isOpen ? 'closed' : 'open'}`}>
            {isOpen && isSmallScreen &&
                <div className={`dropdown${isOpen ? ' open' : ''} `}>
                    <li style={{ color: '#BCA37D', cursor: "pointer" }}  onClick={() => { window.location.href="/flexible-mgmt"}}>Flexible MGMT</li>
                    <li onClick={() => { scrollToSection('#artists') }}>Roster</li>
                    <li onClick={() => { scrollToSection('#about') }}>About</li>
                    <li onClick={() => { scrollToSection('#contact') }}>Contact</li>
                </div>
            }
        </div>
    </>
    )
}

export default DropdownMenu