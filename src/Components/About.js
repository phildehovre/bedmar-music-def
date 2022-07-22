import React from 'react'
import Section from './Section'
import Card from './Card'
import './About.css'

function About(props) {
    const { themeColor, cards } = props

    const renderCards = () => {
        return cards.map((card, i) => {
            return <Card
                themeColor={themeColor}
                key={i}
                content={card}
            />
        })
    }

    return (
        <Section
            {...props}
        >
            <div className='cards-ctn' >
                {renderCards()}

            </div>
        </Section>
    )
}

export default About