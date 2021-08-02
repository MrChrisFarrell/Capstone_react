import axios from 'axios';
import React, {useEffect} from 'react';
import useForm from '../UseForm/useForm';

const AddCompanyForm = (props) => {
    
    const addCompany = async () => {
        /*if(props.user){
            const company = {
                name: values.name,
                company_key: values.company_key,
                photo_url: values.photo_url,
                details: values.details,
                street_address: values.street_address,
                city: values.city,
                state: values.state,
                zip_code: values.zip_code,
                phone_number: values.phone_number,
                owner: props.user.id
            };
            console.log(company);
            let response = await axios.post(`http://127.0.0.1:8000/company/`, company);
            console.log(response.data);
            alert('Added');
    }else{
        return
    }*/
        window.location.href = "/createEmployee";
    };

    const { values, handleChange, handleSubmit } = useForm(addCompany);

    return (
        <div className="add-company-form">
            <h1 className="form-header">ADD YOUR COMPANY</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Company Name:
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        required={true}
                    />
                </label>
                <label>
                    Create a Unique Company Key:
                    <input
                        type="text"
                        name="company_key"
                        onChange={handleChange}
                        value={values.company_key}
                        required={true}
                    />
                </label>
                <label>
                    Photo URL:
                    <input
                        type="text"
                        name="photo_url"
                        onChange={handleChange}
                        value={values.photo_url}
                        required={true}
                    />
                </label>
                <label>
                    Details:
                    <input
                        type="text"
                        name="details"
                        onChange={handleChange}
                        value={values.details}
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
                    Phone Number:
                    <input
                        type="text"
                        name="phone_number"
                        onChange={handleChange}
                        value={values.phone_number}
                        required={true}
                    />
                </label>
                <button type="submit">Add Company</button>
            </form>
        </div>
    );
};

export default AddCompanyForm;