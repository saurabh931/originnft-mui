import React, { useState } from "react";
import Logo from "../Images/origins-NFT1.png";
import Logo2 from "../Images/logo.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import NFTs from "../Images/Ellipse 9.png";
import Recordion from "../Images/Ellipse 2.png";
import Art from "../Images/Ellipse 3.png";
import Collectibles from "../Images/Ellipse 4.png";
import Music from "../Images/Ellipse 5.png";
import Photography from "../Images/Ellipse 6.png";
import Videos from "../Images/Ellipse 7.png";
import "./Navbar.css";
import Form from "react-bootstrap/Form";

export default function Navbar(props) {
  const [show1, setShow1] = useState(false);
  return (
    <>
      <div className={`Navbar  navbar-${props.mode} bg-${props.mode}`}>
        <div style={{ background: " rgba(166, 166, 166, 0.5)" }}>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid px-5">
              <a className="navbar-brand" href="/">
                <img
                  src={Logo}
                  alt=""
                  className="logo-1"
                  style={{
                    color: props.mode === "light" ? "black " : "white ",
                  }}
                />
                <img src={Logo2} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ float: "right" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav  mb-2 mb-lg-0">
                  <input
                    type="text"
                    className="form-control11"
                    placeholder="Search items, collection, accounts"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <div className="dropdown">
                    <button
                      className="btn nav-link active"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Explore
                    </button>
                    <ul className="dropdown-menu ex">
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={NFTs} alt="" className="allnft" />
                          All NFTs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Recordion} alt="" className="allnft" />
                          Recordian
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Art} alt="" className="allnft" />
                          Art
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Collectibles} alt="" className="allnft" />
                          Collectibles
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Music} alt="" className="allnft" />
                          Music
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Photography} alt="" className="allnft" />
                          Photography
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Videos} alt="" className="allnft" />
                          Videos
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <button
                      className="btn nav-link active "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Stats
                    </button>
                    <ul className="dropdown-menu stats">
                      <li>
                        <a className="dropdown-item" href="/statstop">
                          Stats1
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="/">
                          Rankings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Activities
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn nav-link active"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="/helpcenter"
                    >
                      Resources
                    </button>
                    <ul className="dropdown-menu resources">
                      <li>
                        <a className="dropdown-item" href="/">
                          Docs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Patterns
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Advertisement
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/helpcenter">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/helpcenter-newsletter"
                        >
                          Newsletter
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn nav-link active"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Create
                    </button>
                  </div>
                  <ul className="nav-icons navicon23">
                    <li className="nav-icons-1">
                      <div className="dropdown">
                        <button
                          className="btn nav-link active"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <CgProfile
                            className="profile"
                            style={{
                              color:
                                props.mode === "light" ? "black " : "white ",
                            }}
                          />
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="/profile">
                              Profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Favourite
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Watchlist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/mycollections">
                              My collections
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Settings
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex" href="/">
                              Night Mode
                              <span>
                                <Form>
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    style={{ marginLeft: "85px" }}
                                  />
                                </Form>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>{" "}
                    </li>
                    <li className="nav-icons-1">
                      <MdOutlineAccountBalanceWallet
                        style={{
                          color: props.mode === "light" ? "black " : "white ",
                        }}
                      />
                    </li>
                    <li className="nav-icons-1">
                      <AiOutlineShoppingCart
                        style={{
                          color: props.mode === "light" ? "black " : "white ",
                        }}
                      />
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
