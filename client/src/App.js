import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Profile from "./components/Profile"

import "./App.css";
import setAuthToken from './utils/setAuthToken'
import {loadUser } from './actions/authAction'
import store from './store'
import { getProduct } from "./actions/productAction";

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  

  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/profile" component={ Profile } />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
