import React from 'react'
import './mcFormContainer.css'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './CustomForm'


function MailChimpFormContainer(props) {
    const REACT_APP_MAILCHIMP_U = '800ae0a9b6716b4e80bb78f10'
    const REACT_APP_MAILCHIMP_ID = '2b9a27d11b'

    const postUrl = `https://bedmarmusic.us17.list-manage.com/subscribe/post?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;

    return (
        <div className='mcformcontainer-ctn'>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => {
                    return (< div >
                        <CustomForm onSubmitted={formData => subscribe(formData)}
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    </div>)
                }}
            />
        </div >
    )
}

export default MailChimpFormContainer