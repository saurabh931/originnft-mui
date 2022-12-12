import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Filtericon from "../Images/filter-vector.png";
import Refresh from "../Images/Reload-vector.png";
import Viewgrid from "../Images/view-grid.png";
import Viewgrid2 from "../Images/Group8926.png";
import IconButton from "@mui/material/IconButton";

import Card from "react-bootstrap/Card";
import Image2 from "../Images/notableimag3.png";
import small2 from "../Images/tabimage1.png";
import Check from "../Images/tickimg.png";

import { IoMdArrowDropdown } from "react-icons/io";

import Cardimage from "../Images/notableimag3.png";

import "./Users.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  maxWidth: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "100ch",
      },
    },
  },
}));

export default function Nftscards() {
  return (
    <>
      <Box>
        <Grid>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xxl={2} xl={2} lg={2} md={12} sm={12} xs={12}>
                <div>
                  <Button className="filter-button">
                    <img src={Filtericon} alt="" />
                    <span className="filter-tab">Filters</span>
                  </Button>
                  <Button className="refresh-button">
                    <img src={Refresh} alt="" />
                  </Button>
                </div>
              </Grid>
              <Grid item xxl={7} xl={7} lg={7} md={12} sm={12} xs={12}>
                <div className="search-nav">
                  <div className="input-nav">
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 400,
                      }}
                      id="form-search-input"
                    >
                      <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                      >
                        <SearchIcon id="search-icon" />
                      </IconButton>
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search by NFTs"
                        id="search-icon-text"
                      />
                    </Paper>
                  </div>
                </div>
                {/*               <div>
         <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                className="search-input"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            </div> */}
              </Grid>
              <Grid item xxl={3} xl={3} lg={3} md={12} sm={12} xs={12}>
                <div>
                  <Button className="recent-button">
                    <span className="recent">Recently Listed </span>
                    <span>
                      <IoMdArrowDropdown className="recent" />
                    </span>
                  </Button>
                  <Button className="view-button">
                    <span>
                      <img src={Viewgrid} alt="" className="grid" />
                    </span>
                    <span>
                      <img src={Viewgrid2} alt="" />
                    </span>
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xxl={3} xl={3} lg={4} md={4} sm={6} xs={12}>
                <Card>
                  <Card.Img variant="top" src={Image2} />
                  <Card.Body>
                    <Card.Title className="card-body12">
                      <span>
                        {" "}
                        <img
                          src={small2}
                          alt=""
                          style={{
                            display: "inline-flex",
                            borderRadius: "100%",
                          }}
                          className="card-image1"
                        />{" "}
                      </span>
                      {/* <span className="text32">Mohammad Ali</span> */}
                    </Card.Title>
                    <ul className="card-section1">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="user-na">
                            Hot Cheetos <img src={Check} alt="" />
                          </span>
                          <p className="user-na1">1.76K Followers</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <button className="follow-button">Follow</button>
                        </div>
                      </div>
                    </ul>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid item xxl={3} xl={3} lg={4} md={4} sm={6} xs={12}>
                <Card>
                  <Card.Img variant="top" src={Image2} />
                  <Card.Body>
                    <Card.Title className="card-body12">
                      <span>
                        {" "}
                        <img
                          src={small2}
                          alt=""
                          style={{
                            display: "inline-flex",
                            borderRadius: "100%",
                          }}
                          className="card-image1"
                        />{" "}
                      </span>
                      {/* <span className="text32">Mohammad Ali</span> */}
                    </Card.Title>
                    <ul className="card-section1">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="user-na">
                            Hot Cheetos <img src={Check} alt="" />
                          </span>
                          <p className="user-na1">1.76K Followers</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <button className="follow-button">Follow</button>
                        </div>
                      </div>
                    </ul>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid item xxl={3} xl={3} lg={4} md={4} sm={6} xs={12}>
                <Card>
                  <Card.Img variant="top" src={Image2} />
                  <Card.Body>
                    <Card.Title className="card-body12">
                      <span>
                        {" "}
                        <img
                          src={small2}
                          alt=""
                          style={{
                            display: "inline-flex",
                            borderRadius: "100%",
                          }}
                          className="card-image1"
                        />{" "}
                      </span>
                      {/* <span className="text32">Mohammad Ali</span> */}
                    </Card.Title>
                    <ul className="card-section1">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="user-na">
                            Hot Cheetos <img src={Check} alt="" />
                          </span>
                          <p className="user-na1">1.76K Followers</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <button className="follow-button">Follow</button>
                        </div>
                      </div>
                    </ul>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid item xxl={3} xl={3} lg={4} md={4} sm={6} xs={12}>
                <Card>
                  <Card.Img variant="top" src={Image2} />
                  <Card.Body>
                    <Card.Title className="card-body12">
                      <span>
                        {" "}
                        <img
                          src={small2}
                          alt=""
                          style={{
                            display: "inline-flex",
                            borderRadius: "100%",
                          }}
                          className="card-image1"
                        />{" "}
                      </span>
                      {/* <span className="text32">Mohammad Ali</span> */}
                    </Card.Title>
                    <ul className="card-section1">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="user-na">
                            Hot Cheetos <img src={Check} alt="" />
                          </span>
                          <p className="user-na1">1.76K Followers</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <button className="follow-button">Follow</button>
                        </div>
                      </div>
                    </ul>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}
