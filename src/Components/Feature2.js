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
                            Entrepreneurial at heart, Marta's whole life has been dedicated to music in some shape or form. 


Originally from Spain, she started studying music at the age of 5, choosing violin as her main instrument at the age of 7. After over a decade of building her career as a professional violinist, Marta’s entrepreneurial instinct and passion for business development kicked in, leading her to start her first business at the age of 18.


With degrees in Business Management and Music Performance, an MBA and a master's in Music Industry Management and Artist Development from the University of West London, Marta gained valuable experience working as an Assistant Manager for a Spanish concert promoter and management company, after which she decided to continue developing her career in the UK, with roles in artist management, live promotion, A&R, marketing, business operations, and business development.


In April 2022, having previous experience in executive roles and driven by her passion for working with artists, and the belief in a better way of doing things in the industry that's fairer for everyone involved, she founded Bedmar Music, a non-traditional artist management company where honesty, transparency, and fairness form the bedrock of every decision.


Before starting her own roster, Marta had already worked with dozens of artists, including Billy Lockett, Elder Island, Paco Montalvo (Spain) and numerous up-and-coming artists.


With any new project she embarks on, Marta strives to continue redefining industry norms by developing innovative strategies that prioritize artists' well-being and foster a collaborative and supportive environment, where business practices are ethical and success is measured not just by commercial gains but by the genuine fulfilment and growth of each artist and team member under her guidance.
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