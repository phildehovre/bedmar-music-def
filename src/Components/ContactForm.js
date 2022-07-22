import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

const ContactForm = () => {

    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSubmitting(true)

        // ==================TESTING====================
        // emailjs.sendForm('service_9kxvb5g', 'template_8ritoet', form.current, '_VEP37dcdk8CqXpDX')

        // ==================MARTA====================
        emailjs.sendForm('service_yqsql9y', 'template_pqe05lu', form.current, 'vtxRfvmj9tjaWsUTg')
            .then((result) => {
                console.log(result.text);
                setSubmitting(false)
                setSubmitted(true)
            }, (error) => {
                console.log(error.text);
            });

    };

    return (<>
        <div className='form-ctn'>
            <form ref={form} onSubmit={sendEmail}>
                <div style={{ display: 'flex', width: '100%' }}>
                    <div className='label-ctn first-name'>
                        <label>NAME*</label>
                        <input type="text" name="from_firstname" className='formfield name' placeholder='FIRST NAME' required />
                    </div>
                    <div className='label-ctn last-name'  >
                        <label style={{ opacity: '0' }}>Last name</label>
                        <input type="text" name="from_lastname" className='formfield name' placeholder='SURNAME' required />
                    </div>
                </div>
                <div className='label-ctn'>
                    <label>EMAIL*</label>
                </div>
                <input type="email" name="user_email" className='formfield email' required placeholder='Your e-mail address' />
                <div className='label-ctn'>
                    <label>YOUR MESSAGE*</label>
                </div>
                <textarea name="message" className='formfield message' required placeholder='Please indicate type of project and feel free to include links with more info or music!' />
                <input type="submit" className='submit-btn' value={submitting ? 'Submitting...' : "Submit"} />
                {submitted && <div className='submitted'>Your message was submitted succesfullly!</div>}
            </form>

        </div>
    </>
    );
};

export default ContactForm