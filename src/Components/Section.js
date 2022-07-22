import React from 'react'
import './Section.css'

function Section(props) {

    const {
        children,
        title,
        subtitle,
        height,
        bg,
        text,
        category,
        textAlign,
        id,
    } = props



    const sectionStyles = {
        backgroundColor: bg,
        height: height,

    }

    const textStyles = {
        color: text,
        textAlign: textAlign,
    }



    return (
        <div className='section-ctn' id={id} style={sectionStyles}>
            {title && <div className='title' style={textStyles}>{title}</div>}
            {category && <h3 className='category' style={textStyles}>{category}</h3>}
            {subtitle && <div className='subtitle'>{subtitle}</div>}
            {children}
        </ div>
    )
}

export default Section