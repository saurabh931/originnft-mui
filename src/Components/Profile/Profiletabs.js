import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// IMPORT
import "./Profiletabs.css";
import ProfileSelector from "./ProfileSelector";
import Dropdown from "react-bootstrap/Dropdown";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

//IMAGES
import View from "../../Images/view-grid.png";
import View2 from "../../Images/Group8926.png";

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

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container-fluid">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                className="tab-select"
              >
                <Tab label="Collected 3" value="1" className="tab1" />
                <Tab label="Created" value="2" className="tab1" />
                <Tab label="Favorites" value="3" className="tab1" />
                <Tab label="Activities" value="4" className="tab1" />
                <Tab label="More" value="5" className="tab1" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ProfileSelector />
            </TabPanel>
            <TabPanel value="2">
              <div className="container-fluid">
              <div className="row py-3 pb-5">
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
            </div>
                <div className="row setting-page">
                  <h5 className="content-text">No items to display</h5>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="container-fluid">
              <div className="row py-3 pb-5">
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
            </div>
              </div>
              <div className="row setting-page">
                <h5 className="content-text">No items to display</h5>
              </div>
            </TabPanel>
            <TabPanel value="4"> <div className="container-fluid">
            <div className="row py-3 pb-5">
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
          </div>
              </div>
              <div className="row setting-page">
                <h5 className="content-text">No items to display</h5>
              </div>
              </TabPanel>
            <TabPanel value="5"> <div className="container-fluid">
            <div className="row py-3 pb-5">
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
          </div>
              </div>
              <div className="row setting-page">
                <h5 className="content-text">No items to display</h5>
              </div>
              </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}
