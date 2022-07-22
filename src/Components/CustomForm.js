import React, { useState, useEffect } from 'react'
import InputField from './InputField';

const CustomForm = ({ status, message, onValidated }) => {


    const [email, setEmail] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            // firstName &&
            // lastName &&
            email.indexOf("@") > -1 &&
            onValidated({
                b_email: email,
                // MERGE1: firstName,
                // MERGE2: lastName,
            });
    }

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status])

    const clearFields = () => {
        // setFirstName('');
        // setLastName('');
        setEmail('');
    }

    return (
        <form className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="title">Join our email list for future updates.</h3>
            <div className="field-ctn">
                {/* <InputField
                    label="First Name"
                    onChangeHandler={setFirstName}
                    type="text"
                    value={firstName}
                    placeholder="Jane"
                    isRequired
                /> */}

                {/* <InputField
                    label="Last Name"
                    onChangeHandler={setLastName}
                    type="text"
                    value={lastName}
                    placeholder="Doe"
                    isRequired
                /> */}

                <InputField
                    label="Email"
                    onChangeHandler={setEmail}
                    type="email"
                    value={email}
                    placeholder="your@email.com"
                    isRequired
                />

            </div>

            <InputField
                label="subscribe"
                type="submit"
                formValues={[email
                    // , firstName, lastName
                ]}
            />
        </form>
    );
};


export default React.memo(CustomForm)