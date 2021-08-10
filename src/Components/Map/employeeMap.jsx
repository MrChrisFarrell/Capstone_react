import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { useState } from 'react';
import googleAPIKey from '../../APIKeys/googleAPIKey'

const mapStyles = {
    width: '100%',
    height: '100%',
  };


const EmployeeMapContainer =(props)=> {
  
  const handleClick = async (companyId) => {
    debugger;
    props.visitCompanyPage(companyId);
  }
  
    const displayMarkers = () => {
        console.log(props.stores);
      return props.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.lat,
         lng: store.long
       }}
       onClick={() => handleClick(store.company.id)} />
      })
    }

    const testMarkers = props.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.lat,
        lng: store.long
      }}
      onClick={() => handleClick(store.company.id)} />
    })
  
  
        if(props.employeeLatLong == null){
            return(<h1>NOthing</h1>)
        }else{
            return (
                <Map
                  google={props.google}
                  zoom={8}
                  style={mapStyles}
                  initialCenter={props.employeeLatLong}
                >
                  {testMarkers}
                </Map>
            );
        }
    }
  

  export default GoogleApiWrapper({
    apiKey: googleAPIKey
  })(EmployeeMapContainer);