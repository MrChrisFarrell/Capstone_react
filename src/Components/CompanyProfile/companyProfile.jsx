import React from "react";

const CompanyProfile = (props) => {

    if(props.selectedCompany){
        let store = props.compLatLongs.filter(comp => comp.company.id == props.selectedCompany);
        console.log(store);
        let filteredPromotions = props.promotions.filter(prom => prom.company.id == props.selectedCompany);
        console.log(filteredPromotions);
        const promotions = filteredPromotions.map((promotion)=>(
            <div className="promotion-container">
                <h4 className="promotion-details">{promotion.details}</h4>
                <p className="promotion-date">From: {promotion.start_date}</p>
                <p className="promotion-date">To: {promotion.end_date}</p>
            </div>
        ))
        return (
            <div className="profile-container">
                <div className="company">
                    <div>
                        <h1>{store[0].company.name}</h1>
                    </div>
                    <div className="company-photo">Company Photo: {store[0].company.photo_url}</div>
                    <div>
                        <h2>{store[0].company.phone_number}</h2>
                        <h3>{store[0].company.street_address}</h3>
                        <h4>{store[0].company.city}, {store[0].company.state} {store[0].company.zip_code}</h4>
                    </div>
                    <div className="company-details">
                        <p>{store[0].company.details}</p>
                    </div>
                </div>
                <div><h2>Our Current Promotions</h2>{promotions}</div>
                <div ><props.CompanyMapContainer stores={store}/></div>
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