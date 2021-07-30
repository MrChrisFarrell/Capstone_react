import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route, Redirect, Link, Router } from "react-router-dom";
import CompanyProfile from './CompanyProfile/companyProfile';
import RegistrationForm from './AccountForms/registerForm';
import PromotionForm from './PromotionForm/promotionForm';
import CreateEmployeeForm from './CreateEmployee/createEmployeeForm';
import AddCompanyForm from './AddCompany/addCompanyForm';
import EmployeeHomePage from './EmployeeHomePage/employeeHomePage';
import MapContainer from './Map/map';

function App() {
  const [user, setUser] = useState({});
  const [userCompany, setUserCompany] = useState(null);
  const [invalidKey, setInvalidKey] = useState(true);
  const [employee, setEmployee] = useState(null);

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
    let response = await axios.get(`http://127.0.0.1:8000/accounts/1/`);
    console.log(response.data);
    setUser(response.data);
  }
  
  useEffect(async ()=>{
    getUser();
  }, [])

  useEffect(async ()=>{
    getEmployeeByUserId(user.id);
  }, [user]);

  useEffect(async ()=>{

  }, [userCompany, invalidKey]);

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
        <Route path="/employee" render={props => <EmployeeHomePage {...props} GoogleMap={MapContainer} employee={employee}/>}/>
      </Switch>
    </div>
  );
}

export default App;
