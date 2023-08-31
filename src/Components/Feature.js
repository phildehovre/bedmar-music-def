import React, {useEffect} from 'react'
import Section from './Section'
import FeatureCard from './FeatureCard'
import FeatureCardv2 from './FeatureCardv2'
import './Feature.css'
import { inView, animate, stagger } from 'motion'

function Features(props) {

    const { features, themeColor, text, overlay, category, isSmallScreen } = props

    useEffect(() => {
        inView('#artist-card', () => {
            animate('#artist-card', {opacity: [0, 1]}, {duration: 1, ease: 'easeInOut', delay: stagger(0.25)})
        })
    }, [])

    const renderFeatures = () => {
        return features.map((feature, i) => {
            if (category === 'roster') {
                return (
                    <FeatureCard
                        feature={feature}
                        key={i}
                        id='artist-card'
                        textColor={text}
                        isSmallScreen={isSmallScreen}
                    />
                )
            }

            return (
                <FeatureCardv2
                    feature={feature}
                    key={i}
                    id={i}
                    textColor={text}
                    isSmallScreen={isSmallScreen}
                />
            )
        })
    }



    const styles = {
        color: themeColor
    }
    const overlayStyles = {
        backgroundColor: overlay
    }

    return (
        <Section
            {...props}
        ><div className='feature-ctn' id='artists' style={styles}>
                {renderFeatures()}
                <div className='overlay' style={overlayStyles}></div>
            </div>
        </Section >
    )
}

export default Features