import React from "react";

const EmployeeHomePage = (props) => {

    if(props.employee == null){
        return(
            <div>Loading</div>
        )
    }else{
        return (
            <div className="employee-home-container">
                <div className="employee-name">
                    <h1>Hello, {props.employee.first_name}</h1>
                </div>
                <div>Promotions near you:</div>
            </div>  
        )
    }
}

export default EmployeeHomePage;