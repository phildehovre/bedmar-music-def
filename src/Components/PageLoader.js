import React, { useEffect, useState } from 'react'
import Section from './Section'
import Button from './Button'
import './Hero.css'

function PageLoader(props) {

    const { content, themeColor } = props
    const [animate, setAnimate] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setAnimate(false)
        }, 1750)
    }, [])



    return (
        <Section
            {...props}
        >
            <div className='page_loader-ctn'>
                <div className='tagline-ctn'>
                    <div className='title'>Bedmar Music</div>
                    <div className={`visual-element ${animate ? 'animate' : ''}`} style={{ backgroundColor: themeColor }}></div>
                    <div className='subtitle' style={{ color: themeColor }}>empowering talent</div>
                    <div className='content'>{content}</div>
                    <div className='cta-ctn'>
                        <Button
                            text='Roster'
                            outline={themeColor}
                            to='#artists'
                        />
                        {/* <Button
                            text='Businesses'
                            outline={themeColor}
                            to='#businesses'

                        /> */}

                    </div>
                </div>
            </div>
        </Section>
    )
}

export default PageLoader 