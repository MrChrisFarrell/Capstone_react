import React from "react";

const CompanyProfile = (props) => {

    if(props.employee){
        return (
            <div className="profile-container">
                <div className="company-name">
                    <h1>Company Name: {props.employee.state}</h1>
                </div>
                <div>Company Photo: {props.user.email}</div>
                <div>
                    <h2>Phone Number</h2>
                    <h3>Street Address</h3>
                    <h4>City, State Zip</h4>
                </div>
                <div className="company-details">)
                    <p>Company Details</p>
                </div>
                <div>Google Map</div>
                <div>Promotions</div>
            </div>
        )
    }else{
        return (
            <div className="profile-container">
                <div className="company-name">
                    <h1>Company Name:</h1>
                </div>
                <div>Company Photo:</div>
                <div>
                    <h2>Phone Number</h2>
                    <h3>Street Address</h3>
                    <h4>City, State Zip</h4>
                </div>
                <div className="company-details">)
                    <p>Company Details</p>
                </div>
                <div>Google Map</div>
                <div>Promotions</div>
            </div>
        )
    }
}

export default CompanyProfile;