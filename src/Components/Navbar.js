import React, { useRef } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import Socials from './Socials'
import { endpoints } from '../constants/nav'
import { handleEndpointClick } from '../helpers/nav'
// import { stylesVariables } from '../Styles/Variables';

function Navbar(props) {

    const { isSmallScreen } = props
    // const { secondary } = stylesVariables

    const scrollToSection = (section) => {
        let target = document.querySelector(section)
        target.scrollIntoView({ behavior: 'smooth' });
    }

    const redirect = (url) => {
        window.location.href = url
    }

    const navRef = useRef()

    const renderLinks = () => {
        return endpoints.map(endpoint => {
            return (
                    <li onClick={() => handleEndpointClick(endpoint) }>
                        <Link key={endpoint.label} className='navbar-link' to="">{endpoint.label}</Link>
                    </li>
            )
        })
    }

    return (
        <div className="navbar-ctn" ref={navRef}>
            <Link to='/'>
                <div className='logo-ctn'>
                    <div className='logo'></div>
                </div>
            </Link>
            {!isSmallScreen && <>
                <ul>
                    {renderLinks()}
                </ul>
                <Socials
                    pro={true}
                    color='white'
                    isSmallScreen={isSmallScreen}
                    show={{
                        facebook: true,
                        twitter: true,
                        instagram: true,
                        linkedIn: true
                    }}
                />
            </>
            }
            {isSmallScreen &&
                <>
                    <Socials
                        alignment='left'
                        pro={true}
                        isSmallScreen={isSmallScreen}
                        show={{
                            facebook: true,
                            twitter: true,
                            instagram: true,
                            linkedIn: true
                        }}
                        color='white'
                    />
                    <Dropdown
                        {...props}
                    />
                </>
            }
        </div>
    )
}

export default Navbar