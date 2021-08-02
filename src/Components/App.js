import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route, Redirect, Link, Router } from "react-router-dom";
import OwnerCompanyProfile from './CompanyProfile/ownerCompanyProfile';
import RegistrationForm from './AccountForms/registerForm';
import PromotionForm from './PromotionForm/promotionForm';
import CreateEmployeeForm from './CreateEmployee/createEmployeeForm';
import AddCompanyForm from './AddCompany/addCompanyForm';
import EmployeeHomePage from './EmployeeHomePage/employeeHomePage';
import CompanyMapContainer from './Map/companyMap'
import EmployeeMapContainer from './Map/employeeMap';
import googleAPIKey from '../APIKeys/googleAPIKey';

function App() {
  const [user, setUser] = useState({});
  const [userCompany, setUserCompany] = useState(null);
  const [invalidKey, setInvalidKey] = useState(true);
  const [employee, setEmployee] = useState(null);
  const [ employeeLatLong, setEmployeeLatLong] = useState(null);
  const [promotions, setPromotions] = useState(null);
  const [compLatLongs, setCompLatLongs] = useState(null);
  const [ownedCompany, setOwnedCompany] = useState(null);

  // const getUser = async () => {
  //   //const jwt = localStorage.getItem("token");
  //   try {
  //     let response = await axios.get(
  //       "https://localhost:44394/api/examples/user"
  //     );
  //     setUser(response.data);
  //   } catch (error) {
  //     console.error("There was an error in the USER GET request");
  //   }
  // };

  const getUser = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/accounts/3/`);
    console.log(response.data);
    setUser(response.data);
  }

  const getPromotions = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/promotion/`);
    console.log(response.data);
    setPromotions(response.data);
  }

  const getCompLatLongs = async () => {
    let response = await axios.get ('http://127.0.0.1:8000/complatlong/');
    console.log(response.data);
    setCompLatLongs(response.data);
  }

  const convertAddress = async (streetAddress, city, state)=>{
    let address = streetAddress+"%20"+city+"%20"+state;
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleAPIKey}`);
    console.log(response.data);
    return (response.data.results[0].geometry.location)
  } /*convertAddress(employee.street_address, employee.city, employee.state)*/
  
  useEffect(async ()=>{
    getUser();
    getPromotions();
    getCompLatLongs();
  }, [])

  useEffect(async ()=>{
    getEmployeeByUserId(user.id);
    getOwnedCompany(user);
  }, [user]);

  const getOwnedCompany = async (user) => {
    if(user.is_owner){
      let response = await axios.get(`http://127.0.0.1:8000/company/3/?user_id=${user.id}`);
      console.log(response.data);
      setOwnedCompany(response.data);
    }
  }

  useEffect(async ()=>{

  }, [userCompany, invalidKey]);

  useEffect(async ()=>{
    if(employeeLatLong == null){
      if(employee == null){
        return
      }else{
        let latLong = await convertAddress(employee.street_address, employee.city, employee.state);
        console.log(latLong);
        setEmployeeLatLong(latLong);
      }
    }else{
      return
    }
  }, [employee])

  const getUserCompanyByKey = async (companyKey) => {
    let response = await axios.get(`http://127.0.0.1:8000/company/?company_key=${companyKey}`);
    console.log(response.data);
    setUserCompany(response.data);
  }

  const getEmployeeByUserId = async (userId) => {
    let response = await axios.get(`http://127.0.0.1:8000/employee/1/?user=${userId}`);
    console.log(response.data);
    setEmployee(response.data);
  }

  const changeInvalidKey = (bool) => {
    setInvalidKey(bool);
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/addCompany" render={props => <AddCompanyForm {...props} user={user}/>}/>
        {!promotions ? (null) : <Route path="/employee" render={props => <EmployeeHomePage {...props} promotions={promotions} GoogleMap={EmployeeMapContainer} employee={employee} employeeLatLong={employeeLatLong} compLatLongs={compLatLongs}/>}/>}
        <Route path="/companyProfile" render={props=> <OwnerCompanyProfile {...props} ownedCompany={ownedCompany} CompanyMapContainer={CompanyMapContainer} compLatLongs={compLatLongs} promotions={promotions}/>} />
      </Switch>
    </div>
  );
}

export default App;
