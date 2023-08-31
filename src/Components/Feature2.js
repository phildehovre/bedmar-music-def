import React, { useState} from 'react'
import Section from './Section'
import Socials from './Socials'
import './Feature2.css'
// import { animate, inView, timeline, stagger} from 'motion'

function Feature2(props) {

    // useEffect(() => {
    //     inView('.feature2-ctn', ({target}) => {console.log('in view')
    //     timeline([
    //         [

    //             animate('#slide-ctn', {x: [100, 0]}, {duration: 1.5, easing: 'ease-out', })
    //         ],
    //         [

    //             animate('#slide-title', {x: [-100, 0]}, {duration: 1.5, easing: 'ease-out', delay: stagger(1)})
    //         ]
    //     ])
    // })
    // }, []);

    const { themeColor, text, content, highlight, featureTitle, bgImg, isSmallScreen, tertiary } = props

    const [hovering, setHovering] = useState(false)
    const styles = {
        color: themeColor,
        borderBottom: `${isSmallScreen ? '1px solid ' + themeColor : ''}`,
        textAlign: 'left',
        borderRight: `${isSmallScreen ? '' : '1px solid ' + themeColor}`,
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
                                <span className='p white'>
                                    Entrepreneur, professional violinist, artist manager, A&R and concert promoter, with previous experience in executive roles.
                                </span>
                                <br />
                                <span>
                                    Graduated in Business Management and Music Performance, Marta holds an MBA and a masters in Music Industry Management & Artist Development with Distinction at the University of West London.
                                </span>
                                <br />
                                She gained valuable experience working as Assistant Manager for a
                                <p>
                                    <span className='p white'>
                                        concert promoter and record label in Spain, after which she decided to continue developing her career in the UK
                                    </span>
                                    <span>
                                        {` `}with roles in music management, live events, A&R, social media, marketing and business development.
                                    </span>
                                </p>
                                <br />
                                <p>
                                    She’s worked with dozens of artists, including{` `}
                                    <span className='p white'>
                                        Billy Lockett, Elder Island, Sam Branson / Waves Rush In, RJ Thompson, Paco Montalvo{` `}
                                    </span>
                                    (Spain) and
                                </p>
                                hundreds of up and coming artists.
                                <br />
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