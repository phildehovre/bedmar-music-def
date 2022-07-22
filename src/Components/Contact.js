import React from 'react'
import Section from './Section'
import ContactForm from './ContactForm'

function Contact(props) {
    return (
        <>
            <Section
                title={`let's work together`}
                {...props}
            >
                <ContactForm />
            </Section>
        </>
    )
}

export default Contact