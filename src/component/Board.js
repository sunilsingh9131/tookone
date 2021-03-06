// @ts-nocheck
import React, { Component } from "react";
import NavbarUser from "../component/NavbarUser";
import Sidebar from "../component/Sidebar";
import "../Modalpop.css";
import {
  // Link,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBModal,
  // MDBModalBody,

} from "mdbreact";
// import { Link } from "react-router-dom";

import ProgressBar from "react-bootstrap/ProgressBar";
import { Multiselect } from "multiselect-react-dropdown";

class Board extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      activeItem: "1",
      activeItem1: "1",
      collapseID: "basicCollapse3",
      modal: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
      plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    }));
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  toggle12 = (tab) => (e) => {
    if (this.state.activeItem1 !== tab) {
      this.setState({
        activeItem1: tab,
      });
    }
  };

  toggle1 = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  toggle2 = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const { plainArray } = this.state;

    return (
      <div>
        <NavbarUser />
        <div className="ibord">
          <Sidebar />

          <div className="content-main">
            <MDBRow>
              <MDBCol md="9">
                <div className="card-box">
                  <div className="iboard-new">
                    <h1>
                      <img src={require("./image/iboard-logo.png")} alt="" />
                    </h1>

                    <MDBNav className="nav-tabs iboardtabs">
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={this.state.activeItem1 === "1"}
                          onClick={this.toggle12("1")}
                          role="tab"
                        >
                          Interests
                          <span>5</span>
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          // active={this.state.activeItem1 === "2"}
                          // onClick={this.toggle12("2")}
                          // role="tab"
                        >
                          Timeline
                          <span>5</span>
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          // active={this.state.activeItem1 === "3"}
                          // onClick={this.toggle12("3")}
                          // role="tab"
                        >
                          User
                          <span>5</span>
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNav>

                    <span style={{ color: "#9BCC37", cursor: "pointer" }}>
                      {/* <i className="fa fa-plus" onClick={this.toggle2}></i> */}
                    </span>
                  </div>
                  <div className="boxdiv">
                    <MDBTabContent activeItem={this.state.activeItem1}>
                      <MDBTabPane tabId="1" role="tabpanel">
                        <MDBRow>
                          <MDBCol md="5">
                            <MDBRow>
                              <MDBCol md="6">
                                <div className="userpoint">
                                  <img
                                    src={require("./image/ellipe-1.png")}
                                    alt=""
                                  />
                                  <div className="point-name">
                                    <p>User points </p> <b>170</b>
                                  </div>
                                </div>
                              </MDBCol>

                              <MDBCol md="6">
                                <div className="userpoint">
                                  <img
                                    src={require("./image/ellipe-1.png")}
                                    alt=""
                                  />
                                  <div className="point-name">
                                    <p>Team points </p> <b>10</b>
                                  </div>
                                </div>
                              </MDBCol>
                            </MDBRow>
                          </MDBCol>
                          <MDBCol md="2" className="text-center">
                            <div className="vertical-border"></div>
                          </MDBCol>
                          <MDBCol md="5">
                            <MDBRow>
                              <MDBCol md="6">
                                <div className="userpoint">
                                  <img
                                    src={require("./image/token-icon-1.png")}
                                    alt=""
                                  />
                                  <div className="point-name">
                                    <p>Token </p> <b>10</b>
                                  </div>
                                </div>
                              </MDBCol>

                              <MDBCol md="6">
                                <div className="userpoint">
                                  <img
                                    src={require("./image/token-icon-2.png")}
                                    alt=""
                                  />
                                  <div className="point-name">
                                    <p>Credits </p> <b>10</b>
                                  </div>
                                </div>
                              </MDBCol>
                            </MDBRow>
                          </MDBCol>
                        </MDBRow>
                      </MDBTabPane>
                      <MDBTabPane tabId="2" role="tabpanel">
                        <p className="mt-2">Time line</p>
                      </MDBTabPane>
                      <MDBTabPane tabId="3" role="tabpanel">
                        <p className="mt-2">user</p>
                      </MDBTabPane>
                    </MDBTabContent>
                  </div>
                </div>

                <MDBRow className="mt-5">
                  <MDBCol md="4">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i
                            class="fas fa-ellipsis-v"
                            onClick={this.showMenu}
                          ></i>
                        </span>
                      </div>
                      {this.state.showMenu ? (
                        <div
                          className="menu-berlin"
                          ref={(element) => {
                            this.dropdownMenu = element;
                          }}
                        >
                          <ul>
                            <li>
                              <a href="#">
                                <i class="fas fa-crosshairs"></i> Berlin
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-crosshairs"></i> Berlin
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-crosshairs"></i> Berlin
                              </a>
                            </li>
                          </ul>
                        </div>
                      ) : null}

                      <img src={require("./image/refresh.jpg")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name">
                        <i class="fas fa-crosshairs"></i> Berlin
                      </div>
                    </div>
                  </MDBCol>

                  <MDBCol md="4">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i class="fas fa-ellipsis-v"></i>
                        </span>
                      </div>
                      <img src={require("./image/refresh.jpg")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name">
                        <i class="fas fa-fire-alt"></i>Trend
                      </div>
                    </div>
                  </MDBCol>

                  <MDBCol md="4">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i class="fas fa-ellipsis-v"></i>
                        </span>
                      </div>
                      <img src={require("./image/refresh.jpg")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name">
                        <i class="fas fa-crosshairs"></i> Berlin
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
                <hr className="mt-5 mb-5 border-green" />
                <MDBRow>
                  <MDBCol md="3">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i class="fas fa-ellipsis-v"></i>
                        </span>
                      </div>
                      <img src={require("./image/mask.jpg")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name d-flex align-items-center justify-content-md-around">
                        Test Category
                        <div className="expendbox">
                          <i class="fas fa-expand"></i>
                          <i class="far fa-check-circle"></i>
                          <i class="far fa-trash-alt"></i>
                        </div>
                      </div>
                    </div>
                  </MDBCol>

                  <MDBCol md="3">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i class="fas fa-ellipsis-v"></i>
                        </span>
                      </div>
                      <img src={require("./image/mask.jpg")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name d-flex align-items-center justify-content-md-around">
                        Test Category
                        <div className="expendbox">
                          <i class="fas fa-expand"></i>
                          <i class="far fa-check-circle"></i>
                          <i class="far fa-trash-alt"></i>
                        </div>
                      </div>
                    </div>
                  </MDBCol>

                  <MDBCol md="3">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i class="fas fa-ellipsis-v"></i>
                        </span>
                      </div>
                      <img src={require("./image/mask.jpg")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name d-flex align-items-center justify-content-md-around">
                        Test Category
                        <div className="expendbox">
                          <i class="fas fa-expand"></i>
                          <i class="far fa-check-circle"></i>
                          <i class="far fa-trash-alt"></i>
                        </div>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol md="3">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i class="fas fa-ellipsis-v"></i>
                        </span>
                      </div>
                      <img src={require("./image/mask.jpg")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name d-flex align-items-center justify-content-md-around">
                        Test Category
                        <div className="expendbox">
                          <i class="fas fa-expand"></i>
                          <i class="far fa-check-circle"></i>
                          <i class="far fa-trash-alt"></i>
                        </div>
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
                {/* <MDBRow className="mt-5">
                <MDBCol md="12">
                  <div className="add-post">
                    <p>You haven't added any interests yet!</p>
                    <span>
                      <i class="fas fa-plus" onClick={this.toggle2}></i>
                    </span>
                  </div>
                </MDBCol>
              </MDBRow> */}

                <MDBRow className="mt-4">
                  <MDBCol md="3">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i class="fas fa-ellipsis-v"></i>
                        </span>
                      </div>
                      <img src={require("./image/interest-bg.png")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name iboar-ref">
                        Interests Name<span className="countnumber">57</span>
                        <div className="expendbox">
                          <i class="fas fa-ellipsis-v"></i>
                        </div>
                      </div>
                    </div>
                  </MDBCol>

                  <MDBCol md="3">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i class="fas fa-ellipsis-v"></i>
                        </span>
                      </div>
                      <img src={require("./image/interest-bg.png")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name iboar-ref">
                        Interests Name<span className="countnumber">57</span>
                        <div className="expendbox">
                          <i class="fas fa-ellipsis-v"></i>
                        </div>
                      </div>
                    </div>
                  </MDBCol>

                  <MDBCol md="3">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i class="fas fa-ellipsis-v"></i>
                        </span>
                      </div>
                      <img src={require("./image/interest-bg.png")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name iboar-ref">
                        Interests Name<span className="countnumber">57</span>
                        <div className="expendbox">
                          <i class="fas fa-ellipsis-v"></i>
                        </div>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol md="3">
                    <div className="colum-box">
                      <div className="icon-re">
                        <span>
                          <i class="fas fa-redo-alt"></i>
                        </span>
                        <span>
                          <i class="fas fa-ellipsis-v"></i>
                        </span>
                      </div>
                      <img src={require("./image/interest-bg.png")} alt="" />
                      <ProgressBar variant="success" now={60} />
                      <div className="city-name iboar-ref">
                        Interests Name<span className="countnumber">57</span>
                        <div className="expendbox">
                          <i class="fas fa-ellipsis-v"></i>
                        </div>
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>

              <MDBCol md="3">
                <div className="proposal create-top-align">
                  <h1>Proposal</h1>

                  <MDBNav className="tabs-div">
                    <MDBNavItem>
                      <MDBNavLink
                        link
                        to="#"
                        active={this.state.activeItem === "1"}
                        onClick={this.toggle("1")}
                        role="tab"
                      >
                        <i class="fas fa-bars"></i>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        link
                        to="#"
                        active={this.state.activeItem === "2"}
                        onClick={this.toggle("2")}
                        role="tab"
                      >
                        <i class="fab fa-codepen"></i>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        link
                        to="#"
                        active={this.state.activeItem === "3"}
                        onClick={this.toggle("3")}
                        role="tab"
                      >
                        <i class="fas fa-users"></i>
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <div className="tabsbox">
                    <MDBTabContent activeItem={this.state.activeItem}>
                      <MDBTabPane tabId="1" role="tabpanel">
                        <div className="proposal-container">
                          <div className="proposal-img mb-3 border-create-radius">
                            <span className="cubebox">
                              <i class="fab fa-codepen"></i>
                            </span>
                            <img src={require("./image/mask.jpg")} alt="" />
                            <div className="create-user-icon">
                              <i class="fas fa-user"></i>
                            </div>
                          </div>

                          <div className="proposal-img">
                            <span
                              className="cubebox"
                              onClick={this.toggleCollapse("basicCollapse")}
                            >
                              <i class="fab fa-codepen"></i>
                            </span>
                            <img src={require("./image/mask.jpg")} alt="" />
                            <div className="create-user-icon">
                              <i class="fas fa-user"></i>
                            </div>
                          </div>
                          <MDBCollapse
                            id="basicCollapse"
                            isOpen={this.state.collapseID}
                          >
                            <div className="droptoggle">
                              <img src={require("./image/mask.jpg")} alt="" />
                            </div>
                            <div className="instest">
                              <i class="fab fa-codepen"></i>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Test insterest"
                              />
                            </div>
                            <div className="search-fillter">
                              <i class="fas fa-filter"></i>
                              <Multiselect
                                options={plainArray}
                                isObject={false}
                              />
                            </div>
                            <div className="add-proposal-post">
                              <i
                                class="far fa-plus-square"
                                onClick={this.toggle1}
                              ></i>
                            </div>
                          </MDBCollapse>
                        </div>
                      </MDBTabPane>
                      <MDBTabPane tabId="2" role="tabpanel">
                        <div className="proposal-container">
                          <div
                            className="proposal-img"
                            onClick={this.toggleCollapse("basicCollapse2")}
                          >
                            <span className="cubebox">
                              <i class="fab fa-codepen"></i>
                            </span>
                            <img src={require("./image/refresh.jpg")} alt="" />
                          </div>
                          <MDBCollapse
                            id="basicCollapse2"
                            isOpen={this.state.collapseID}
                          >
                            <div className="droptoggle">
                              <p>Test interests</p>
                              <img
                                src={require("./image/refresh.jpg")}
                                alt=""
                              />
                            </div>
                            <div className="instest">
                              <i class="fab fa-codepen"></i>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Test insterest"
                              />
                            </div>
                            <div className="search-fillter">
                              <i class="fas fa-filter"></i>
                              <Multiselect
                                options={plainArray}
                                isObject={false}
                              />
                            </div>
                            <div className="add-proposal-post">
                              <i
                                class="far fa-plus-square"
                                onClick={this.toggle1}
                              ></i>
                            </div>
                          </MDBCollapse>
                        </div>
                      </MDBTabPane>
                      <MDBTabPane tabId="3" role="tabpanel">
                        <div className="proposal-container">
                          <div
                            className="proposal-img"
                            onClick={this.toggleCollapse("basicCollapse3")}
                          >
                            <span className="cubebox">
                              <i class="fab fa-codepen"></i>
                            </span>
                            <img src={require("./image/mask.jpg")} alt="" />
                          </div>
                          <MDBCollapse
                            id="basicCollapse3"
                            isOpen={this.state.collapseID}
                          >
                            <div className="droptoggle">
                              <p>Test interests</p>
                              <img src={require("./image/mask.jpg")} alt="" />
                            </div>
                            <div className="instest">
                              <i class="fab fa-codepen"></i>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Test insterest"
                              />
                            </div>
                            <div className="search-fillter">
                              <i class="fas fa-filter"></i>
                              <Multiselect
                                options={plainArray}
                                isObject={false}
                              />
                            </div>
                            <div className="add-proposal-post">
                              <i
                                class="far fa-plus-square"
                                onClick={this.toggle1}
                              ></i>
                            </div>
                          </MDBCollapse>
                        </div>
                      </MDBTabPane>
                    </MDBTabContent>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </div>

        {/* profile div start sidebar */}

        <MDBModal
          className="profile-modal"
          isOpen={this.state.modal}
          toggle={this.toggle2}
        >
          <div className="proposal">
            <h1>Proposal</h1>

            <MDBNav className="tabs-div">
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "1"}
                  onClick={this.toggle("1")}
                  role="tab"
                >
                  <i class="fas fa-bars"></i>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "2"}
                  onClick={this.toggle("2")}
                  role="tab"
                >
                  <i class="fab fa-codepen"></i>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "3"}
                  onClick={this.toggle("3")}
                  role="tab"
                >
                  <i class="fas fa-users"></i>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <div className="tabsbox">
              <MDBTabContent activeItem={this.state.activeItem}>
                <MDBTabPane tabId="1" role="tabpanel">
                  <div className="proposal-container">
                    <div
                      className="proposal-img"
                      onClick={this.toggleCollapse("basicCollapse")}
                    >
                      <span className="cubebox">
                        <i class="fab fa-codepen"></i>
                      </span>
                      <img src={require("./image/mask.jpg")} alt="" />
                    </div>
                    <MDBCollapse
                      id="basicCollapse"
                      isOpen={this.state.collapseID}
                    >
                      <div className="droptoggle">
                        <p>Test interests</p>
                        <img src={require("./image/mask.jpg")} alt="" />
                      </div>
                      <div className="instest">
                        <i class="fab fa-codepen"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Test insterest"
                        />
                      </div>
                      <div className="search-fillter">
                        <i class="fas fa-filter"></i>
                        <Multiselect options={plainArray} isObject={false} />
                      </div>
                      <div className="add-proposal-post">
                        <i
                          class="far fa-plus-square"
                          onClick={this.toggle1}
                        ></i>
                      </div>
                    </MDBCollapse>
                  </div>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <div className="proposal-container">
                    <div
                      className="proposal-img"
                      onClick={this.toggleCollapse("basicCollapse2")}
                    >
                      <span className="cubebox">
                        <i class="fab fa-codepen"></i>
                      </span>
                      <img src={require("./image/refresh.jpg")} alt="" />
                    </div>
                    <MDBCollapse
                      id="basicCollapse2"
                      isOpen={this.state.collapseID}
                    >
                      <div className="droptoggle">
                        <p>Test interests</p>
                        <img src={require("./image/refresh.jpg")} alt="" />
                      </div>
                      <div className="instest">
                        <i class="fab fa-codepen"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Test insterest"
                        />
                      </div>
                      <div className="search-fillter">
                        <i class="fas fa-filter"></i>
                        <Multiselect options={plainArray} isObject={false} />
                      </div>
                      <div className="add-proposal-post">
                        <i
                          class="far fa-plus-square"
                          onClick={this.toggle1}
                        ></i>
                      </div>
                    </MDBCollapse>
                  </div>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                  <div className="proposal-container">
                    <div
                      className="proposal-img"
                      onClick={this.toggleCollapse("basicCollapse3")}
                    >
                      <span className="cubebox">
                        <i class="fab fa-codepen"></i>
                      </span>
                      <img src={require("./image/mask.jpg")} alt="" />
                    </div>
                    <MDBCollapse
                      id="basicCollapse3"
                      isOpen={this.state.collapseID}
                    >
                      <div className="droptoggle">
                        <p>Test interests</p>
                        <img src={require("./image/mask.jpg")} alt="" />
                      </div>
                      <div className="instest">
                        <i class="fab fa-codepen"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Test insterest"
                        />
                      </div>
                      <div className="search-fillter">
                        <i class="fas fa-filter"></i>
                        <Multiselect options={plainArray} isObject={false} />
                      </div>
                      <div className="add-proposal-post">
                        <i
                          class="far fa-plus-square"
                          onClick={this.toggle1}
                        ></i>
                      </div>
                    </MDBCollapse>
                  </div>
                </MDBTabPane>
              </MDBTabContent>
            </div>
          </div>
        </MDBModal>
      </div>
    );
  }
}

export default Board;
