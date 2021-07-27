import React from "react";

const CompanyProfile = (props) => {


    return (
        <div className="profile-container">
            <div className="company-name">
                <h1>Company Name</h1>
            </div>
            <div>Company Photo</div>
            <div>
                <h2>Phone Number</h2>
                <h3>Street Address</h3>
                <h4>City, State Zip</h4>
            </div>
            <div className="company-details">
                <p>Company Details</p>
            </div>
            <div>Google Map</div>
        </div>
    )
}

export default CompanyProfile;