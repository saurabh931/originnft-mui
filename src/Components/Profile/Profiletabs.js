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
import { Grid, IconButton, Paper } from "@mui/material";
import { Button } from "react-bootstrap";
import Filtericon from "../../Images/filter-vector.png";
import Refresh from "../../Images/Reload-vector.png";
import Viewgrid from "../../Images/view-grid.png";
import Viewgrid2 from "../../Images/Group8926.png";
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
              <div className="">
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
                <div className="row setting-page">
                  <h5 className="content-text">No items to display</h5>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="3">
            <div className="">
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
                <div className="row setting-page">
                  <h5 className="content-text">No items to display</h5>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="4">
              {" "}
              <div className="">
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
                <div className="row setting-page">
                  <h5 className="content-text">No items to display</h5>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="5">
              {" "}
              <div className="">
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
                <div className="row setting-page">
                  <h5 className="content-text">No items to display</h5>
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}
