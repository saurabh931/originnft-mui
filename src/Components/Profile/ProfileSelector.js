import React from "react";
import "./ProfileSelector.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Dropdown from "react-bootstrap/Dropdown";

// IMAGE IMPORT
import View from "../../Images/view-grid.png";
import View2 from "../../Images/Group8926.png";
import Cards1img from "../../Images/Rectangle10.png";
import Cards2img from "../../Images/Rectangle11.png";
import Cards3img from "../../Images/Rectangle12.png";
import Filtericon from "../../Images/filter-vector.png";
import Refresh from "../../Images/Reload-vector.png";
import Viewgrid from "../../Images/view-grid.png";
import Viewgrid2 from "../../Images/Group8926.png";

//IMPORT CARDS

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Grid, IconButton, Paper } from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "2px solid black",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
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
    marginTop: "5px",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ProfileSelector() {
  return (
    <>

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
        <div className="search-nav search-text-field">
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
        {/* <div className="row py-3 pb-5">
          <div className="col-lg-1 col-md-1 col-sm-1 col-1 py-3">
            <span>
              <FilterListIcon />
            </span>
          </div>
          <div className="col-lg-7 col-md-11 col-sm-11 col-11  py-3">
            <Search className="search-00">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search by name"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6 py-3">
            {" "}
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic recently-listed-dropdown"
                className="profile-recently"
              >
                Recently Listed
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6 py-2  py-3  ">
            <span className="view-bu">
              <img src={View} alt="" className="vv-bu" />
              <img src={View2} alt="" />
            </span>
          </div>
        </div> */}
  
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <Card>
              <Card.Img variant="top" src={Cards1img} />
              <Card.Body>
                <Card.Title className="card-head">Red Angrybol</Card.Title>
                <Card.Text>Recordian Headset</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <Card>
              <Card.Img variant="top" src={Cards2img} />
              <Card.Body>
                <Card.Title className="card-head">Red Angrybol</Card.Title>
                <Card.Text>Recordian Headset</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <Card>
              <Card.Img variant="top" src={Cards3img} />
              <Card.Body>
                <Card.Title className="card-head">Red Angrybol</Card.Title>
                <Card.Text>Recordian Headset</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <Card>
              <Card.Img variant="top" src={Cards1img} />
              <Card.Body>
                <Card.Title className="card-head">Red Angrybol</Card.Title>
                <Card.Text>Recordian Headset</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSelector;
