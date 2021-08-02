import React, {useState, useEffect} from 'react';
import useForm from '../UseForm/useForm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';

const PromotionForm = (props) => {
    const [startDate, setStartDate] = useState(new Date);
    const [endDate, setEndDate] = useState(new Date);

    const addPromotion = async () =>{
        const promotion = {
            details: values.details,
            start_date: moment(startDate).format("yyyy-MM-DD"),
            end_date: moment(endDate).format("yyyy-MM-DD"),
            photo_url: values.photo_url,
            company: props.ownedCompany.id
        };
        console.log(promotion);
        let response = await axios.post(`http://127.0.0.1:8000/promotion/`, promotion);
        console.log(response.data);
        alert("promotion added");
    };

    const { values, handleChange, handleSubmit } = useForm(addPromotion);

    return (
        <div className="promotion-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Promotion Details:
                    <input
                        type="text"
                        name="details"
                        onChange={handleChange}
                        value={values.details}
                        required={true}
                    />
                </label>
                <label>
                    Start Date:
                    <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date)=> setStartDate(date)} />
                </label>
                <label>
                    End Date:
                    <DatePicker dateFormat="yyyy-MM-dd" selected={endDate} onChange={(date)=> setEndDate(date)} />
                </label><br></br>
                <label>
                    Photo Url:
                    <input
                        type="text"
                        name="photo_url"
                        onChange={handleChange}
                        value={values.photo_url}
                        required={true}
                    />
                </label>
                <button type="submit">Add Promotion</button>
            </form>
        </div>
    );
};

export default PromotionForm;