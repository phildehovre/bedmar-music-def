import React from 'react'
import Section from './Section'
import Button from './Button'
// import { stylesVariables } from '../Styles/Variables'
import './Slogan.css'

function Slogan(props) {

    const { content, themeColor, isSmallScreen } = props
    // const { secondary } = stylesVariables



    return (
        <div className='slogan-ctn'>
            <Section {...props}>
                <div className='slogan-grid-ctn'>
                    <div className='content' style={{ borderRight: `1px solid ${themeColor}` }}>{content}</div>
                    <div className='cta-ctn'>
                        <Button
                            text='roster'
                            outline={themeColor}
                            to='#artists'
                            color='white'
                            border='2'
                            lg={!isSmallScreen}
                            bg=''
                        />
                        {/* <Button
                            color='white'
                            text='businesses'
                            outline={themeColor}
                            to='#businesses'
                            border='2'
                            lg={!isSmallScreen}
                            bg={secondary}
                        /> */}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Slogan