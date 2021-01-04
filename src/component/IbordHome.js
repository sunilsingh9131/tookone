import React, { useState, useEffect } from "react";
import NavbarUser from "./NavbarUser";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Subscribers from "./Subscribers1";
import Subscribed from "./Subscribed";
import Contribution from "./Contribution";
import All from "./All";

// import NavMy from '../component/NavMy'
import "../Modalpop.css";
import {
  MDBIcon,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModal,
  Link,
  MDBModalBody,
} from "mdbreact";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function IbordHome() {
  const classes = useStyles();

  const [showMe, setshowMe] = useState(false);

  const [container, setContainer] = useState("");

  // const [activeItem , setactiveItem] = useState(false)

  const operation = () => {
    setshowMe(!showMe);
  };

  

  const handleClick = (opt) => {
    switch (opt) {
      case 0:
        setContainer(fetchUser());
        break;

      case 1:
        setContainer(fetchWeb());
        break;

      case 2:
        setContainer(fetchPost());
        break;

      case 3:
        setContainer(fetchSubscribers());
        break;

      case 4:
        setContainer(fetchSubscribed());
        break;

      case 5:
        setContainer(fetchContribution());
        break;
    }
  };

  const fetchUser = () => {
    return (
      <>
        <h1> User Post </h1>
      </>
    );
  };

  const fetchWeb = () => {
    return (
      <>
        <h1> Web </h1>
      </>
    );
  };

  const fetchPost = () => {
    return (
      <>
        <h1> Post </h1>
      </>
    );
  };

  const fetchSubscribers = () => {
    return <Subscribers />;
  };

  const fetchSubscribed = () => {
    return <Subscribed />;
  };

  const fetchContribution = () => {
    return <Contribution />;
  };

  return (
    <>
      <NavbarUser />

      <div className="ibord">
        <Sidebar />
        <All />

        <div className="content-main top-postion">
          <MDBContainer>
            <div className="{classes.root}">
              <ul className="menubar-update">
                <li>
                  <a className="active" onClick={() => handleClick(0)}>
                    User Post
                  </a>
                </li>

                <li>
                  <a onClick={() => handleClick(1)}>Web Post</a>
                </li>

                <li>
                  <a onClick={() => handleClick(2)}>
                    <i class="fas fa-at"></i>
                  </a>
                </li>

                <li>
                  <a onClick={() => handleClick(3)}>
                    <i class="fas fa-eye-slash"></i>
                  </a>
                </li>
                <li>
                  <a onClick={() => handleClick(4)}>
                    <i class="fas fa-spinner"></i>
                  </a>
                </li>
                <li>
                  <a onClick={() => handleClick(5)}>
                    <i class="fas fa-filter"></i>
                  </a>
                </li>
              </ul>
            </div>

            {!container ? (
              <>
                <div className="ibord-post mb-4 visibleb">
                  <MDBRow>
                    <MDBCol md="5">
                      <ul className="radio-box">
                        <li>
                          <Link to="/" className='active'>
                            <i class="fas fa-eye"></i> Visible
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i class="fas fa-eye-slash"></i> Invisible
                          </Link>
                        </li>
                      </ul>
                    </MDBCol>
                    <MDBCol md="7">
                      <ul className="ibord-lists">
                        <li>
                          <Link to="/">
                            <MDBIcon icon="edit" />
                            All
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <MDBIcon icon="camera" />
                            Images
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <MDBIcon icon="video" />
                            Videos
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <MDBIcon icon="music" />
                            Audio
                          </Link>
                        </li>

                        <li>
                          <Link to="/">
                            <MDBIcon icon="text-height" />
                            Text
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => operation()}>
                            <MDBIcon icon="ellipsis-v" />
                            Sort
                          </Link>
                          {showMe ? (
                            <div
                              className="short-list"
                              onClick={() => setshowMe(false)}
                              // onClick={() => this.setState({ showMe: false })}
                            >
                              <ul>
                                <li>
                                  <Link to="#">Top Post </Link>
                                </li>
                                <li>
                                  <Link to="#">New Post </Link>
                                </li>
                                <li>
                                  <Link to="#">Most of the comments </Link>
                                </li>
                              </ul>
                            </div>
                          ) : null}
                        </li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                </div>

                <div className="tabs-bio">
                  <div className="unfinished">
                    <h2>Unfinished Post</h2>
                    <div className="grid">
                      <ul className="grid-list">
                        <li>
                          <Link to="/ibord-home">
                            <MDBIcon icon="th" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/grid-list">
                            <MDBIcon icon="list" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="ibord-post-box">
                      <MDBRow className="no-gutters">
                        <MDBCol md="4">
                          <div className="post-shadow">
                            <Link to="/" className="iconbox">
                              <MDBIcon icon="images" />
                            </Link>
                            <img src={require("./image/i-post.png")} alt="" />
                            <div className="huiye">
                              <h4>
                                <MDBIcon icon="camera" />
                                Photo
                                <br />
                                <small>1 hours Ago</small>
                              </h4>
                              <ul>
                                <li>
                                  <MDBIcon icon="home" />
                                  Berlin
                                </li>
                                <li>
                                  <MDBIcon icon="map-marker-alt" />
                                  50 KM Deffrent
                                </li>
                              </ul>
                            </div>
                          </div>
                        </MDBCol>
                        <MDBCol md="4">
                          <div className="post-shadow">
                            <Link to="/" className="iconbox">
                              <MDBIcon icon="video" />
                            </Link>
                            <img src={require("./image/i-post-2.png")} alt="" />
                            <div className="huiye">
                              <h4>
                                <MDBIcon icon="video" />
                                Videos
                                <br />
                                <small>1 hours Ago</small>
                              </h4>
                              <ul>
                                <li>
                                  <MDBIcon icon="home" />
                                  Berlin
                                </li>
                                <li>
                                  <MDBIcon icon="map-marker-alt" />
                                  50 KM Deffrent
                                </li>
                              </ul>
                            </div>
                          </div>
                        </MDBCol>

                        <MDBCol md="4">
                          <div className="post-shadow">
                            <Link to="/" className="iconbox">
                              <MDBIcon icon="music" />
                            </Link>
                            <img src={require("./image/i-post-5.png")} alt="" />
                            <div className="huiye">
                              <h4>
                                <MDBIcon icon="music" /> Music
                                <br />
                                <small>1 hours Ago</small>
                              </h4>
                              <ul>
                                <li>
                                  <MDBIcon icon="home" />
                                  Berlin
                                </li>
                                <li>
                                  <MDBIcon icon="map-marker-alt" />
                                  50 KM Deffrent
                                </li>
                              </ul>
                            </div>
                          </div>
                        </MDBCol>
                        <MDBCol md="4">
                          <div className="post-shadow">
                            <Link to="/" className="iconbox">
                              <MDBIcon icon="images" />
                            </Link>
                            <img src={require("./image/i-post-3.png")} alt="" />
                            <div className="huiye">
                              <h4>
                                <MDBIcon icon="camera" /> Photo
                                <br />
                                <small>1 hours Ago</small>
                              </h4>
                              <ul>
                                <li>
                                  <MDBIcon icon="home" />
                                  Berlin
                                </li>
                                <li>
                                  <MDBIcon icon="map-marker-alt" />
                                  50 KM Deffrent
                                </li>
                              </ul>
                            </div>
                          </div>
                        </MDBCol>

                        <MDBCol md="4">
                          <div className="post-shadow">
                            <Link to="/" className="iconbox">
                              <MDBIcon icon="video" />
                            </Link>
                            <img src={require("./image/i-post-4.png")} alt="" />
                            <div className="huiye">
                              <h4>
                                <MDBIcon icon="video" />
                                Videos
                                <br />
                                <small>1 hours Ago</small>
                              </h4>
                              <ul>
                                <li>
                                  <MDBIcon icon="home" />
                                  Berlin
                                </li>
                                <li>
                                  <MDBIcon icon="map-marker-alt" />
                                  50 KM Deffrent
                                </li>
                              </ul>
                            </div>
                          </div>
                        </MDBCol>

                        <MDBCol md="4">
                          <div className="post-shadow">
                            <Link to="/" className="iconbox">
                              <MDBIcon far icon="file-excel" />
                            </Link>
                            <img src={require("./image/i-post-6.png")} alt="" />
                            <div className="huiye">
                              <div className="annual_btn">
                                <span>
                                  <MDBIcon far icon="file-excel" />
                                  Annual Report
                                </span>
                                <span>
                                  <MDBIcon far icon="arrow-alt-circle-down" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              container
            )}
          </MDBContainer>
        </div>
      </div>
    </>
  );
}
