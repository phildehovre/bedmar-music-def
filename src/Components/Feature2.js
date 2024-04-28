import React, { useState} from 'react'
import Section from './Section'
import Socials from './Socials'
import './Feature2.css'
import { bio } from '../Assets/bio'
import Bio from './Bio'
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
                            <Bio />
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