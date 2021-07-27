import { useState } from 'react';

const useForm = (callback) => {
    const [values, setValues] = useState({});

    const handleChange = (event)=> {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}));
    };

    const handleInputChange = (event) => {
        event.persist();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setValues(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    };

    return {values, handleChange, handleSubmit, handleInputChange}
};

export default useForm;