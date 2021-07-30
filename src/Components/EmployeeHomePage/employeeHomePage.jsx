import React from "react";

const EmployeeHomePage = (props) => {

    const link = {
        coords: { lat: 42, lng: 42 }, // required: latitude & longitude at which to display the marker
        title: `Life, the Universe and Everything`, // optional
        url: `https://wikipedia.org/wiki/Life,_the_Universe_and_Everything`, // optional
      }

    function addMarkers(map, links) {
        links.forEach((link, index) => {
          const marker = new window.google.maps.Marker({
            map,
            position: link.coords,
            label: `${index + 1}`,
            title: link.title,
          })
          marker.addListener(`click`, () => {
            window.location.href = link.url
          })
        })
    }
      
    let mapProps = {
        options: { center: { lat: 20, lng: 40 }, zoom: 4 },
        onMount: addMarkers, 
        onMountProps: link, 
    }

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
                <props.GoogleMap {...mapProps}/>
            </div>  
        )
    }
}

export default EmployeeHomePage;