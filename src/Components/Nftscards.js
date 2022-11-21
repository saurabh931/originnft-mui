import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import Filtericon from "../Images/filter-vector.png";
import Refresh from "../Images/Reload-vector.png";
import Viewgrid from "../Images/view-grid.png";
import Viewgrid2 from "../Images/Group8926.png";

import { IoMdArrowDropdown } from "react-icons/io";

import Cardimage from "../Images/notableimag3.png";

import "./Nftscards.css"

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
              <Grid item xxl={1} xl={1} lg={1} md={12} sm={12} xs={12}>
                <Button className="filter-button">
                  <img src={Filtericon} alt="" />
                  <span className="filter-tab">Filters</span>
                </Button>
              </Grid>
              <Grid item  xxl={1} xl={1} lg={1} md={12} sm={12} xs={12}>
                <Button className="refresh-button">
                  <img src={Refresh} alt="" />
                </Button>
              </Grid>
              <Grid item xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
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
              </Grid>
              <Grid item xxl={2} xl={2} lg={2} md={12} sm={12} xs={12}></Grid>
              <Grid item xxl={2} xl={2} lg={2} md={12} sm={12} xs={12}>
                <Button className="recent-button">
                  <span className="recent">Recently Listed </span>
                  <span>
                    <IoMdArrowDropdown className="recent" />
                  </span>
                </Button>
              </Grid>
              <Grid item xxl={1} xl={1} lg={1} md={12} sm={12} xs={12}>
                <Button className="view-button">
                  <span>
                    <img src={Viewgrid} alt="" className="grid" />
                  </span>
                  <span>
                    <img src={Viewgrid2} alt="" />
                  </span>
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <div
                  className="card"
                  style={{ width: "25rem", marginTop: "50px" }}
                >
                  <img
                    className="card-img-top"
                    src={Cardimage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Red Angrybol</h5>
                    <p className="card-text">Recordian Headset</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={{ display: "grid" }}>
                      <span>Price</span>0.548 ETH{" "}
                    </li>
                    <li className="list-group-item" style={{ display: "grid" }}>
                      {" "}
                      <span>Highest Bid</span>No bids yet
                    </li>
                    {/* <li className="list-group-item">Vestibulum at eros</li> */}
                  </ul>
                </div>
              </Grid>
              <Grid item xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <div
                  className="card"
                  style={{ width: "25rem", marginTop: "50px" }}
                >
                  <img
                    className="card-img-top"
                    src={Cardimage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Red Angrybol</h5>
                    <p className="card-text">Recordian Headset</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={{ display: "grid" }}>
                      <span>Price</span>0.548 ETH{" "}
                    </li>
                    <li className="list-group-item" style={{ display: "grid" }}>
                      {" "}
                      <span>Highest Bid</span>No bids yet
                    </li>
                    {/* <li className="list-group-item">Vestibulum at eros</li> */}
                  </ul>
                </div>
              </Grid>
              <Grid item xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <div
                  className="card"
                  style={{ width: "25rem", marginTop: "50px" }}
                >
                  <img
                    className="card-img-top"
                    src={Cardimage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Red Angrybol</h5>
                    <p className="card-text">Recordian Headset</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={{ display: "grid" }}>
                      <span>Price</span>0.548 ETH{" "}
                    </li>
                    <li className="list-group-item" style={{ display: "grid" }}>
                      {" "}
                      <span>Highest Bid</span>No bids yet
                    </li>
                    {/* <li className="list-group-item">Vestibulum at eros</li> */}
                  </ul>
                </div>
              </Grid>
              <Grid item xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <div
                  className="card"
                  style={{ width: "25rem", marginTop: "50px" }}
                >
                  <img
                    className="card-img-top"
                    src={Cardimage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Red Angrybol</h5>
                    <p className="card-text">Recordian Headset</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={{ display: "grid" }}>
                      <span>Price</span>0.548 ETH{" "}
                    </li>
                    <li className="list-group-item" style={{ display: "grid" }}>
                      {" "}
                      <span>Highest Bid</span>No bids yet
                    </li>
                    {/* <li className="list-group-item">Vestibulum at eros</li> */}
                  </ul>
                </div>
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
