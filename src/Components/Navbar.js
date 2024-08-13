import React, { useRef } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import Socials from './Socials'
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

    return (
        <div className="navbar-ctn" ref={navRef}>
            <Link to='/'>
                <div className='logo-ctn'>
                    <div className='logo'></div>
                </div>
            </Link>
            {!isSmallScreen && <>
                <ul>
                    <li onClick={() => { scrollToSection('#artists') }}>
                        <Link className='navbar-link' to="#artists">Roster</Link>
                    </li>
                    <li onClick={() => { redirect("/flexible-mgmt") }}>
                        <a className='navbar-link' >Flexible MGMT</a>
                    </li>
                    {/* <li onClick={() => { scrollToSection('#businesses') }}>
                        <Link className='navbar-link' to="">Businesses</Link>
                    </li> */}
                    <li onClick={() => { scrollToSection('#about') }}>
                        <Link className='navbar-link' to="">About</Link>
                    </li>
                    <li onClick={() => { scrollToSection('#contact') }}>
                        <Link className='navbar-link' to="">Contact</Link>
                    </li>
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