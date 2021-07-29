import axios from 'axios';
import React, {useEffect} from 'react';
import useForm from '../UseForm/useForm';

const CreateEmployeeForm = (props) => {
    
    const createEmployee = async () => {
        if(props.userCompany){
            const employee = {
                first_name: values.first_name,
                last_name: values.last_name,
                street_address: values.street_address,
                city: values.city,
                state: values.state,
                zip_code: values.zip_code,
                email: values.email,
                company: props.userCompany.id,
                user: 1
            };
            console.log(employee);
            let response = await axios.post(`http://127.0.0.1:8000/employee/`, employee);
            console.log(response.data);
            alert('Created');
    }else{
        await props.getUserCompanyByKey(values.company_key);
    }};

    const { values, handleChange, handleSubmit } = useForm(createEmployee);

    return (
        <div className="create-employee-form">
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        value={values.first_name}
                        required={true}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        value={values.last_name}
                        required={true}
                    />
                </label>
                <label>
                    Street Address:
                    <input
                        type="text"
                        name="street_address"
                        onChange={handleChange}
                        value={values.street_address}
                        required={true}
                    />
                </label>
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        onChange={handleChange}
                        value={values.city}
                        required={true}
                    />
                </label>
                <label>
                    Two-letter State:
                    <input
                        type="text"
                        name="state"
                        placeholder="I.e. Ga"
                        onChange={handleChange}
                        value={values.state}
                        required={true}
                    />
                </label>
                <label>
                    Zip Code:
                    <input
                        type="text"
                        name="zip_code"
                        onChange={handleChange}
                        value={values.zip_code}
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
                    Company Key:
                    <input
                        type="text"
                        name="company_key"
                        onChange={handleChange}
                        value={values.company_key}
                        required={true}
                    />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateEmployeeForm;