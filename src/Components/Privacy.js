import React from 'react'
import Section from './Section'
import './Privacy.css'
import { Link } from 'react-router-dom'

const Privacy = (props) => {
    return (
        <Section {...props}>
            <div className='privacy-ctn'>

                <h1>
                    PRIVACY POLICY
                </h1>
                <h2>
                    BEDMAR MUSIC LTD
                </h2>

                <Link to='/'>
                    Home
                </Link>
                <ol>
                    <li>

                        This Privacy Policy sets out how we will treat the personal information which you provide to us while using the website located at http://www.bedmarmusic.co.uk (“Site”) and/or the services provided from the Site (“Services”). You are deemed to accept the terms of this Privacy Policy on your first use of the Site. We may change this Privacy Policy from time to time and such changes shall be effective from the date and time the revised Privacy Policy is posted on the Site. The Site, together with all content on the Site, is owned or controlled by Bedmar Music LTD,, registered in England & Wales with company number 14043243, and having its registered address at 1st Floor, 85 Great Portland Street, London, W1W 7LT.<br />
                    </li>

                    <li>

                        To provide or offer to you our Services, it is sometimes necessary for us to collect and process certain personal information (“Data”), including some or all of the following: name, address, date of birth, gender, email addresses and/or phone numbers, IP addresses, web-browser details, operating system details, your activities on the Site, your personal preferences relating to the Services and/or other relevant information. The Data will be stored together with any additional information you may provide to us, and will be used to provide you with, and to improve, the Services. All Data is processed by us in accordance with applicable data protection legislation and we will keep your personal information only for as long as is necessary.
                    </li>
                    <li>
                        The Data is stored on our servers or those of third-party storage service providers. We may, from time to time, expand or reduce our business which may involve the transfer of certain divisions or assets of our company to other parties, and Data, where relevant, may be transferred to such third parties. Additionally, from time to time we may transfer Data to locations outside the European Economic Area, some of which may have different data protection laws to the UK or the EU, or no data protection laws. In all such cases, we transmit such information only to entities that comply with this policy and applicable law.
                    </li>
                    <li>
                        We may use ‘cookies’ while you access the Site to avoid the need to re-enter details on different occasions. Cookies are also used to collect general usage and volume statistical information. We may use local “shared objects”, also known as “Flash” cookies. Examples of other reasons include:
                        <ul>
                            <li>
                                - enabling us to recognise your device so that you don’t have to give the same information to us several times;
                            </li>
                            <li>
                                - recognising that you may already have given a username and/or password; and/or,
                            </li>
                            <li>
                                - measuring how you are using the Site, to make the Site easier to use and to ensure sufficient capacity for quick delivery.
                            </li>
                            <br />
                            A “cookie” is a small amount of data sent from the server and stored on your computer’s hard drive. Most web browsers are automatically set up to accept cookies, but you can set your browser to refuse cookies or ask your browser to show you where a cookie has been set up. These settings will typically be found in the ‘options’ or ‘preferences’ menu of your browser. Please note that we do not recommend turning cookies off when using the Site as this may prevent you from using certain aspects of the Site.
                        </ul>
                    </li>

                    <li>
                        Please note you have the right to request access to and rectification or erasure of Data or to object to or request the restriction of processing of your Data. Information about concerns or complaints may be made to the Information Commissioner's Office in the UK via https://ico.org.uk/concerns. If you have any questions or if you do not want us to retain or use your personal information, you may withdraw your consent (i.e. “opt out”), by contacting us at info@bedmarmusic.co.uk.
                    </li>

                </ol>

            </div>

        </Section>
    )
}

export default Privacy