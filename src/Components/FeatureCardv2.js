import React from 'react'
import './FeatureCardv2.css'

function FeatureCard(props) {

    const scrollToSection = (section) => {
        let target = document.querySelector(section)
        target.scrollIntoView();
    }

    const { name, img,
        // type, 
        url, bg

    } = props.feature
    const { id, textColor } = props


    const styles = {
        backgroundImage: `url(${img})`,
        color: textColor,
        backgroundColor: bg
    }


    return (
        <div
            style={styles}
            id={id}
            className='featurecardv2-ctn'
        >
            <a href={url} target='_blank' rel='noreferrer' className='link' >
                {!img && <>
                    <div className='contact' onClick={() => { scrollToSection('#contact') }}>
                        <div className='contact-btn'>
                            {name}
                        </div>
                        <div className='element'>?</div>
                    </div>
                </>}
            </a>
        </div>
    )
}

export default FeatureCard