import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

function Button(props) {

    const { text, outline, bg, to, color, border, lg } = props

    const scrollToSection = (section) => {
        let target = document.querySelector(section)
        target.scrollIntoView({ behavior: 'smooth' });
    }


    const styles = {
        backgroundColor: bg,
        color: color,
        border: `${border ? border : '1'}px solid ${outline}`,
        padding: `${lg ? '2em 7em' : ''}`,
        fontSize: `${lg ? '.7em' : ''}`
    }

    return (
        <Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='button' style={styles} onClick={() => { scrollToSection(to) }}>{text}</div>
        </Link >
    )
}

export default Button