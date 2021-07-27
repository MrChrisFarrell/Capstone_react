import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route, Redirect, Link, Router } from "react-router-dom";
import CompanyProfile from './CompanyProfile/companyProfile';
import RegistrationForm from './Forms/registerForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={RegistrationForm}/>
      </Switch>
    </div>
  );
}

export default App;
