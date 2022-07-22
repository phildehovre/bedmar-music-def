import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Dropdown.css'



function Dropdown(props) {

    const { text, bg, handleOpen } = props

    // const [isOpen, setIsOpen] = useState(false)


    const styles = {
        color: text,
        backgroundColor: `${bg && bg.length ? bg : 'none'}`,
    }
    // const dropdownStyles = {
    //     display: isOpen ? 'flex' : 'none',
    // }

    const hamburgerRef = useRef()


    // window.addEventListener('click', (e) => {
    //     if (!e.path.includes(hamburgerRef.current)) {
    //         setIsOpen(false)
    //     }
    // })

    // const scrollToSection = (section) => {
    //     let target = document.querySelector(section)
    //     target.scrollIntoView();
    // }

    return (
        <div className='dropdown-ctn' style={styles} >
            <div ref={hamburgerRef} onClick={() => handleOpen()} >
                <FontAwesomeIcon icon={faBars} className='hb-menu' />
            </div>
            {/* {isOpen &&
                <div className={`dropdown${isOpen ? ' open' : ''} `} style={dropdownStyles}>
                    <li onClick={() => { scrollToSection('#home') }}>Home</li>
                    <li onClick={() => { scrollToSection('#artists') }}>Artists</li>
                    <li onClick={() => { scrollToSection('#businesses') }}>Businesses</li>
                    <li onClick={() => { scrollToSection('#about') }}>About</li>
                    <li onClick={() => { scrollToSection('#contact') }}>Contact</li>
                </div>
            } */}
        </div>
    )
}

export default Dropdown