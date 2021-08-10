import React from "react";

const OwnerCompanyProfile = (props) => {

    if(props.ownedCompany){
        debugger;
        let store = props.compLatLongs.filter(comp => comp.company.id == props.ownedCompany.id);
        console.log(store);
        let filteredPromotions = props.promotions.filter(prom => prom.company.id == props.ownedCompany.id);
        console.log(filteredPromotions);
        const promotions = filteredPromotions.map((promotion)=>(
            <div className="promotion-container">
                <h4 className="promotion-details">{promotion.details}</h4>
                <p className="promotion-date">From: {promotion.start_date}</p>
                <p className="promotion-date">To: {promotion.end_date}</p>
                <button onClick={()=>props.deletePromotion(promotion.id)}>Delete Promotion</button>
            </div>
        ))
        return (
            <div className="profile-container">
                <div className="company">
                    <div>
                        <h1>{props.ownedCompany.name}</h1>
                    </div>
                    <div className="company-photo">Company Photo: {props.ownedCompany.photo_url}</div>
                    <div>
                        <h2>{props.ownedCompany.phone_number}</h2>
                        <h3>{props.ownedCompany.street_address}</h3>
                        <h4>{props.ownedCompany.city}, {props.ownedCompany.state} {props.ownedCompany.zip_code}</h4>
                    </div>
                    <div className="company-details">
                        <p>{props.ownedCompany.details}</p>
                    </div>
                </div>
                <div><h2>Our Current Promotions</h2>{promotions}</div>
                <div className="company-map"><props.CompanyMapContainer stores={store}/></div>
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

export default OwnerCompanyProfile;