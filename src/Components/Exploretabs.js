import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

import Collectionscards from "./Collectionscard";

import "./Exploretabs.css";
import Nftscards from "./Nftscards";
import Users from "./Users";
import Footer from "./Footer";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="NFTs" {...a11yProps(0)} />
            <Tab label="Collections" {...a11yProps(1)} />
            <Tab label="Users" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Nftscards />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Collectionscards />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Users />
        </TabPanel>
      </Box>
      
    </>
  );
}
