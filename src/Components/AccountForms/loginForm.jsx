import React, {useEffect} from 'react';
import useForm from '../UseForm/useForm';

const LoginForm = (props) => {
    const { values, handleChange, handleInputChange, handleSubmit } = useForm(login);

    props.setIsLoggedIn(false);

    function login(){
        window.location.href = "/employee";
    }

    return (
        <div className="login-form">
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
                    Password:
                    <input
                        type="text"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        required={true}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;