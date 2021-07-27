import React, {useEffect} from 'react';
import useForm from '../UseForm/useForm';

const RegistrationForm = (props) => {
    const { values, handleChange, handleInputChange, handleSubmit } = useForm(register);

    function register(){
        const account = {
            username: values.username,
            email: values.email,
            password: values.password,
            is_owner: values.is_owner
        };
        console.log(account);
        alert('Registered');
    }

    return (
        <div className="registration-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        required={true}
                    />
                </label>
                <label>
                    email:
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        required={true}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        required={true}
                    />
                </label>
                <label>
                    Company Owner:
                    <input name="is_owner" type="checkbox" checked={values.is_owner} onChange={handleInputChange} />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm