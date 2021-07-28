import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route, Redirect, Link, Router } from "react-router-dom";
import CompanyProfile from './CompanyProfile/companyProfile';
import RegistrationForm from './AccountForms/registerForm';
import PromotionForm from './PromotionForm/promotionForm';

function App() {
  const [user, setUser] = useState({});

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

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={PromotionForm}/>
      </Switch>
    </div>
  );
}

export default App;
