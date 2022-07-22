import React from 'react'
import './Socials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function Socials(props) {

    const { color, show, alignment, wide, pro } = props

    const { facebook, instagram, linkedIn, twitter } = show || []


    const styles = {
        color: `${color}`,
        justifyContent: alignment ? alignment : 'center'
    }


    return (
        <div className={`socials-ctn ${wide ? 'wide' : ''}`} style={styles}>
            {instagram && <a href={pro ? 'http://www.instagram.com/bedmarmusic' : 'https://www.instagram.com/martamartinezh_/'} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faInstagram} size='xl' />
            </a>}
            {linkedIn && <a href={pro ? 'http://www.linkedin.com/company/bedmarmusic' : 'https://www.linkedin.com/in/martamartinezhinojosa/'} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} size='xl' />
            </a>}
            {facebook && <a href={pro ? 'http://www.facebook.com/bedmarmusic' : 'https://www.facebook.com/martamartinezhinojosa'} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faFacebook} size='xl' />
            </a>}
            {twitter && <a href={pro ? 'http://www.twitter.com/bedmarmusic' : ''} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faTwitter} size='lg' />
            </a>}
        </div>
    )
}

export default Socials