import React from "react";
import "./Collectionsstate.css";
import Navbarnft from "./Navbars/Navbarnft";
import Dropdown from "react-bootstrap/Dropdown";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Reload from "../Images/Reload-vector.png";
import Collectionstatstable from "./Collectionstatstable";
import Footer from "./Footer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container-fluid background-collections position-relative">
        <div>
          <h1 className="collection-head-stats">Collection stats</h1>
        </div>
      </div>
      <Box sx={{ width: "100%" }} className="collections-state">
        <Box sx={{ borderBottom: 1, borderColor: "divider", margin: "20px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Top " {...a11yProps(0)} />
            <Tab label="Trending" {...a11yProps(1)} />
            <Tab label="Watchlist" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container className="px-3">
            <Grid item lg={3} md={4} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={5} md={5} sm={5} xs={5}>
                  <Dropdown className="categories-container">
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="toggle-button mx-3"
                      style={{}}
                    >
                      Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={5}>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="toggle-button mx-3"
                    >
                      All Chains
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2} className="grid-btn">
                  <Button className="reload-button">
                    <img src={Reload} alt="" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5} md={4} sm={12}></Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className="timer-container"
            >
              <Grid container spacing={0} className="timer-content">
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">1h</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="hour-span">6h</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">24h</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">7d</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">30d</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">all</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div>
            <Collectionstatstable />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container className="px-3">
            <Grid item lg={3} md={4} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={5} md={5} sm={5} xs={5}>
                  <Dropdown className="categories-container">
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="toggle-button mx-3"
                      style={{}}
                    >
                      Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={5}>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="toggle-button mx-3"
                    >
                      All Chains
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2} className="grid-btn">
                  <Button className="reload-button">
                    <img src={Reload} alt="" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5} md={4} sm={12}></Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className="timer-container"
            >
              <Grid container spacing={0} className="timer-content">
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">1h</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="hour-span">6h</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">24h</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">7d</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">30d</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">all</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container className="px-3">
            <Grid item lg={3} md={4} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={5} md={5} sm={5} xs={5}>
                  <Dropdown className="categories-container">
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="toggle-button mx-3"
                      style={{}}
                    >
                      Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={5}>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="toggle-button mx-3"
                    >
                      All Chains
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2} className="grid-btn">
                  <Button className="reload-button">
                    <img src={Reload} alt="" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5} md={4} sm={12}></Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className="timer-container"
            >
              <Grid container spacing={0} className="timer-content">
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">1h</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="hour-span">6h</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">24h</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">7d</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">30d</span>
                </Grid>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <span className="timer-1">all</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box className="content-section position-relative">
            <Box className="nothing-explore">
              <Typography className="collection-watchlist-text">
                This is where your collections added to watchlist will appear.
              </Typography>
              <Button className="button-explore">Explore Collections</Button>
            </Box>
          </Box>
        </TabPanel>
      </Box>
      <div>
        <Footer />
      </div>
    </>
  );
}
