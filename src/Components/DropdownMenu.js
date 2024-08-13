import React from 'react'
import './DropdownMenu.css'
import './Dropdown.css'
import { endpoints } from '../constants/nav'
import { handleEndpointClick } from '../helpers/nav'

const DropdownMenu = (props) => {

    const { isOpen , isSmallScreen} = props

    const renderLinks = () => {
        return endpoints.map(
            endpoint => {
                return (
                    <li 
                    style={{...endpoint.styles, cursor: "pointer"}} 
                    key={endpoint.label} 
                    onClick={() => handleEndpointClick(endpoint)}>{endpoint.label}</li>

                )
            }
        )
    }

    return (<>
        <div className={`dropdownmenu-ctn ${!isOpen ? 'closed' : 'open'}`}>
            {isOpen && isSmallScreen &&
                <div className={`dropdown${isOpen ? ' open' : ''} `}>
                {renderLinks()}
                </div>
            }
        </div>
    </>
    )
}

export default DropdownMenu