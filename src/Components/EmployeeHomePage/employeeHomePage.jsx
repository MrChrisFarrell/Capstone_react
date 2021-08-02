import React, { useEffect, useState } from "react";

const EmployeeHomePage = (props) => {
    const [promotionCompanies, setPromotionCompanies] = useState(null);
    const [stores, setStores] = useState(null);

    props.setIsLoggedIn(true);

    if(props.promotions !== null){
        if(promotionCompanies == null){
            let filteredComps = props.promotions.map(promotion => {
                return promotion.company.id
            })
            setPromotionCompanies(filteredComps);
        }
        
    }else{
        return(<div>Loading</div>)
    }
    if(promotionCompanies !== null && props.compLatLongs !== null && stores == null){
        let uniqueCompanies = [... new Set(promotionCompanies)];
        let compCoordinates = props.compLatLongs.filter(function(item){
            return uniqueCompanies.includes(item.company.id)
        });
        console.log(compCoordinates);
        setStores(compCoordinates);
    }




    if(props.employee == null){
        return(
            <div>Loading</div>
        )
    }else{
        if(props.promotions.length < 1){
            return (
                <div className="employee-home-container">
                    <div className="employee-name">
                        <h1>Hello, {props.employee.first_name}</h1>
                    </div>
                    <div>Promotions near you:</div>
                    <props.GoogleMap employeeLatLong={props.employeeLatLong}/>
                </div>  
            )
        }else{
            const promotions = props.promotions.map((promotion)=>(
                <div className="promotion-container">
                    <h2>{promotion.company.name}</h2>
                    <h3>{promotion.company.street_address}</h3>
                    <h3>{promotion.company.city}, {promotion.company.state}  {promotion.company.zip_code}</h3>
                    <h4 className="promotion-details">{promotion.details}</h4>
                    <p className="promotion-date">From: {promotion.start_date}</p>
                    <p className="promotion-date">To: {promotion.end_date}</p>
                </div>
            ))
            return (
                <div className="employee-home-container">
                    <div className="employee-name">
                        <h1>Hello, {props.employee.first_name}</h1>
                    </div>
                    <div><h3 className="employee-name">Promotions near you</h3>
                        <div>{promotions}</div>
                    </div>
                    <div className="employee-map"><props.GoogleMap employeeLatLong={props.employeeLatLong} visitCompanyPage={props.visitCompanyPage} stores={stores}/></div>
                </div>  
            )
        }
    }
}

export default EmployeeHomePage;