import React from 'react'
import Section from './Section'
import './Footer.css'
// import { stylesVariables } from '../Styles/Variables';
import { Link } from 'react-router-dom'

function Footer(props) {

    // const {
    //     isSmallScreen 
    // } = props
    // const {
    //     secondary,
    //     tertiary,
    //     background, 
    //     primary
    // } = stylesVariables


    return (
        <Section
            {...props
            }>
            <div className='footer-ctn' >
                {/* <div className='footer-tagline-ctn' style={{ height: '7em' }}>
                    <div className='title' style={{ color: isSmallScreen ? tertiary : 'white' }}>Bedmar Music</div>
                    <div className='element' style={{ color: isSmallScreen ? secondary : tertiary }}></div>
                    <div className='subtitle' style={{ color: isSmallScreen ? secondary : tertiary }}>Empowering talent</div>
                </div> */}
                {/* {!isSmallScreen && */}
                <div className='details'>{`©${new Date().getFullYear()} BEDMAR MUSIC LTD `}
                    <div className='address'>
                        85 Great Portland Street, First floor, London W1W 7LT <br />
                        Registered Number 14043243<br />
                        <Link to='/privacy' >Privacy &amp; Legal</Link> | <a href="mailto:info@bedmarmusic.co.uk">Contact</a>
                    </div>
                </div>
                <a href='https://themmf.net/' target='_blank' rel='noreferrer' className='footer-img-ctn'>
                    <div className='img'></div>
                </a>
                <div className='flex-wrapper'>
                    {/* {isSmallScreen &&
                        <div className='details'>{`©${new Date().getFullYear()} BEDMAR MUSIC LTD `}
                            <div className='address'>
                                85 Great Portland Street, First floor, London W1W 7LT <br />
                                Registered Number 14043243<br />
                                <Link to='/privacy' >Privacy &amp; Legal</Link> | <a href="mailto:info@bedmarmusic.co.uk">Contact</a>
                            </div>
                        </div>
                    } */}
                </div>
                {/* <div className='socials-ctn'>
                    <Socials
                        pro={true}
                        color='white'
                        show={{
                            facebook: true,
                            twitter: true,
                            instagram: true,
                            linkedIn: true
                        }}
                    />
                </div> */}
            </div>
        </Section >
    )
}

export default Footer