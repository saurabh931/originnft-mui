import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Hometable from "./Hometable";
import Dropdown from "react-bootstrap/Dropdown";
import "./Hometabs.css";

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
        <Box sx={{ p: 5 }}>
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
      <div className="Hometabs">
        <Box sx={{ width: "100%", padding: "30px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Trending" {...a11yProps(0)} />
              <Tab label="Tops" {...a11yProps(1)} />

              {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
              <div className="tab-button">
               
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="button-22"
                      className="time-button"
                    >
                      24 h
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
                </span>
                <span className="view-bu">
                  <button
                    variant="success"
                    id="button-22"
                    className="view-all-button"
                  >
                    View all
                  </button>
                </span>
              </div>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Hometable />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Hometable />
          </TabPanel>
          {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
        </Box>
      </div>
    </>
  );
}
