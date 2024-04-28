import React, { useState} from 'react'
import Section from './Section'
import Socials from './Socials'
import './Feature2.css'

function Feature2(props) {

    const bio = `Originally from Spain and based in London for the past 5 years, Marta started her career as a professional violinist but quickly fell in love with the business side of things, which led her to start her first business at the age of 18. 
    Graduated in Business Management and Music Performance, Marta holds an MBA and a masters in Music Industry Management & Artist Development with Distinction at the University of West London.    
    She gained valuable experience working for a concert promoter and record label in Spain, after which she decided to continue developing her career in the UK with roles in music management, live events, A&R, social media, marketing and business development.    
    After four years of experience in artist management, Marta founded Bedmar Music in 2022 with a mission to empower and support artists with unique and out-of-the-box strategies, and where honesty, transparency, and fairness form the bedrock of every decision.`
    
    const { themeColor, text, content, highlight, featureTitle, bgImg, isSmallScreen, tertiary } = props

    const [hovering, setHovering] = useState(false)
    const styles = {
        color: themeColor,
        borderBottom: `${isSmallScreen ? '1px solid ' + themeColor : ''}`,
        textAlign: 'left',
        borderRight: `${isSmallScreen ? '' : '1px solid ' + themeColor}`,
    }

    const renderBio = () => {
        return bio.split('.').map((sentence, index) => {
            if (sentence.length > 1) {

                if ( index % 2 !== 0) {
                    return (
                        <span key={sentence} class="bio-black">{sentence}.</span>
                    )
            } else {
                return <span key={sentence} class="bio-white">{sentence}.</span>
            }
        }
        })
    }

    return (
        <Section {...props}>
            <div className='feature2-ctn' >
                <div className='title-ctn'>
                    <div className='title' id='slide-title'style={styles}>{featureTitle}</div>

                </div>
                {bgImg &&
                    <div className='bio-ctn'>
                        <div
                            className={`img-ctn ${hovering ? 'hover' : ''}`}
                            style={hovering ? {} : { backgroundImage: `url(${bgImg})` }}
                            onMouseEnter={() => { setHovering(true) }}
                            onMouseLeave={() => { setHovering(false) }}
                            onClick={() => { setHovering(!hovering) }}
                        >
                            {hovering && <div className='bio'>
                                {renderBio()}
                                <div style={{ padding: '1em 0 0 0' }}>
                                    <Socials
                                        color={tertiary}
                                        show={{
                                            facebook: true,
                                            twitter: false,
                                            instagram: true,
                                            linkedIn: true
                                        }}
                                        wide={true}
                                        pro={false}
                                    />
                                </div>
                            </div>}
                        </div>
                    </div>}
                <div className='content' id='slide-ctn'  style={{ color: text }}>{content}<> </>
                    <span style={{ color: themeColor }}>
                        {highlight}
                    </span>
                </div>
            </div>
        </Section >
    )
}

export default Feature2