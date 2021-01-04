// @ts-nocheck
import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import logo from "./logo.svg";
import "./App.css";
import "./Style.css";
import LoginRegister from "./component/LoginRegister";
import Footer from "./component/Footer";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Investment from "./pages/Investment";
import Career from "./pages/Career";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Board from "./component/Board";

import Sidebar from "./component/Sidebar";

import IbordHome from "./component/IbordHome";
import GridList from "./component/GridList";
import ForgotPassword from "./component/ForgotPassword";
import ForgotOtp from "./component/ForgotOtp";
import Secured from "./component/Secured";
import HeaderVisitor from "./component/HeaderVisitor";

// import IbordHomeF from "./component/ibordHomeF";
import Contribution from "./component/Contribution";
import Subscribed from "./component/Subscribed";
import Subscribers from "./component/Subscribers";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/login-register" exact component={LoginRegister} />
            <Route path="/" exact component={Home} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/Contact-us" exact component={ContactUs} />
            <Route path="/investment" exact component={Investment} />
            <Route path="/Career" exact component={Career} />
            <Route path="/iboard" exact component={Board} />
            <Route path="/Sidebar" exact component={Sidebar} />

            <Route path="/ibord-home" exact component={IbordHome} />
            <Route path="/grid-list" exact component={GridList} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/forgot-otp" exact component={ForgotOtp} />
            <Route path="/secured" exact component={Secured} />
            <Route path="/HeaderVisitor" exact component={HeaderVisitor} />
            {/* <Route path="/IbordHomeF" exact component={IbordHomeF} /> */}
            <Route path="/Contribution" exact component={Contribution} />
            <Route path="/Subscribed" exact component={Subscribed} />
            <Route path="/Subscribers" exact component={Subscribers} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;