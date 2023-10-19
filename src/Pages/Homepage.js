import React from 'react'
import Hero from '../Components/Hero'
import Feature from '../Components/Feature'
import Feature2 from '../Components/Feature2'
import About from '../Components/About'
import { stylesVariables } from '../Styles/Variables'
import ArtistsList from '../Assets/ArtistsList'
import Contact from '../Components/Contact'
import Slogan from '../Components/Slogan'
import DropdownMenu from '../Components/DropdownMenu'
// import Subscription from '../Components/Subscription'

function Homepage(props) {

    const { isSmallScreen, isOpen } = props

    const {
        secondary,
        primaryText,
        tertiary,
        background,
    } = stylesVariables


    const AvatarUrl = isSmallScreen
        ? 'https://res.cloudinary.com/dtnif6mzm/image/upload/v1656595388/Bedmar%20Music/mobile/Marta_Martinez_or5qyz.png'
        : 'https://res.cloudinary.com/dtnif6mzm/image/upload/v1656595677/Bedmar%20Music/desktop/BedmarMusic-MartaMartinez_asgbni.png'

    return (
        <>
            <DropdownMenu isOpen={isOpen} />
            <Hero
                height='85vh'
                bg=''
                bgImage='https://res.cloudinary.com/dtnif6mzm/image/upload/v1656334495/Bedmar%20Music/pexels-wendy-wei-1916824_sj6add.jpg'
                text={primaryText}
                content='A non-traditional management company empowering artists and music businesses we believe in.'
                themeColor={secondary}
            />
            <Slogan
                content='A non-traditional management company empowering artists and music businesses we believe in.'
                bg={tertiary}
                themeColor={secondary}
                isSmallScreen={isSmallScreen}
            />
            <About
                height='fit-content'
                bg={tertiary}
                title='How We Do It'
                text={background}
                themeColor={secondary}
                cards={[
                    'artist management',
                    'Live promotion',
                    'digital marketing',
                    'campaign management',
                    'artist services',
                    'creative services',
                ]}
            />
            <Feature
                id='artists'
                height='fit-content'
                bg={background}
                title='Who we do it for'
                category='roster'
                textAlign='left'
                text={secondary}
                features={ArtistsList}
                themeColor={secondary}
                overlay={secondary}
                isSmallScreen={isSmallScreen}
            />

            {/* <Feature
                id='businesses'
                height='fit-content'
                bg={background}
                title=''
                category='businesses'
                textAlign='right'
                text='black'
                features={
                    [
                        {
                            // name: 'exit [Live]',
                            url: 'https://startupsmagazine.co.uk/article-meet-exit-live-tool-artists-monetise-live-show-recordings',
                            img: 'https://res.cloudinary.com/dtnif6mzm/image/upload/v1657719318/Bedmar%20Music/desktop/exitlive-grey_krc50n.png',
                            bg: tertiary
                        },
                        {
                            // name: 'Scruff Of The Neck',
                            url: 'https://scruffoftheneck.com/',
                            img: 'https://res.cloudinary.com/dtnif6mzm/image/upload/v1657719301/Bedmar%20Music/desktop/sotn-black_k1t5om.png',
                            bg: 'black'
                        },
                        {
                            name: 'Contact us',
                            imgLg: '',
                            img: '',
                            bg: secondary
                        },
                    ]
                }
                themeColor='black'
                isSmallScreen={isSmallScreen}
            /> */}
            <Feature2
                id='about'
                height='fit-content'
                bg={tertiary}
                featureTitle='Our mission'
                category=''
                textAlign=''
                text='white'
                features={ArtistsList}
                themeColor={secondary}
                content='To help artists and music businesses thrive and achieve their goals, offering support that doesn’t compromise their'
                highlight='authenticity, creative control, freedom, work ethos and wellbeing.'
                isSmallScreen={isSmallScreen}
            />
            <Feature2
                height='fit-content'
                bg={secondary}
                title=''
                featureTitle='Our ethos'
                category=''
                textAlign=''
                text='white'
                features={ArtistsList}
                themeColor='black'
                content='From project management to marketing campaigns or day-to-day operations, our non-traditional approach helps us tailor our services to each project’s needs, allowing for '
                highlight='greater freedom and flexibility.'
                isSmallScreen={isSmallScreen}
            />
            <Feature2
                id='bio'
                height='fit-content'
                bg={tertiary}
                featureTitle='Our Ceo / Founder'
                bgImg={AvatarUrl}
                themeColor={secondary}
                isSmallScreen={isSmallScreen}
                tertiary={tertiary}
            />
            <Contact
                text={secondary}
                id='contact'
                height='fit-content'
            />
            {/* <Subscription /> */}

        </>
    )
}

export default Homepage