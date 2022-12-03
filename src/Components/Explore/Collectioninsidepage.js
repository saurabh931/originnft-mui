import React from "react";
import Navbar from "../Navbars/Navbarnft";
import "./Collectioninsidepage.css";
import ProfileImage from "./Collection-images/Rectangle730.png";
import Checkvector from "./Collection-images/check.png";
import Footer from "../Footer";

//ICONS IMPORT
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { FaDiscord } from "react-icons/fa";
import Discord from "./Collection-images/discord-img.png";
import { RiArrowDropDownLine } from "react-icons/ri";

// IMPORT CHECKBOX
import Checkbox from '@mui/material/Checkbox';

// ACCORDION IMPORT FILE
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// IMPORT
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import View from "../../Images/view-grid.png";
import View2 from "../../Images/Group8926.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Dropdown from "react-bootstrap/Dropdown";
import { TfiReload } from "react-icons/tfi";

// IMPORT
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

// CHECK BOX IMPORT 
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Collectioninsidepage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid background-images-collections"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <img src={ProfileImage} alt="" className="profile-setting-img" />
            <h6 className="profile-name-inside">
              Gamefi Legends <img src={Checkvector} alt="" />
            </h6>
            <h6 className="sub-title-profile">
              by Crypto Khem
              <img src={Checkvector} alt="" />
            </h6>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <span className="icons-collections-inside">
              <LanguageOutlinedIcon style={{ color: "#6A6A6A" }} />
              <img src={Discord} alt="" className="icons-setting-width" />
              <InstagramIcon className="icons-setting-width" />
              <TwitterIcon className="icons-setting-width" />
              <StarBorderOutlinedIcon className="icons-setting-width" />
              <ShareIcon className="icons-setting-width" />
              <MoreHorizIcon className="icons-setting-width11" />
            </span>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-8 col-md-8 col-sm-12 col-12"
              style={{ marginLeft: "90px" }}
            >
              <span>Items 3 </span>
              <span style={{ marginLeft: "10px" }}>Created Sep 2022</span>
              <span style={{ marginLeft: "10px" }}>Creator Fee 10%</span>
              <span style={{ marginLeft: "10px" }}>Chain Ethereum</span>
              <p className="collection-inside-bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus diam tellus, rhoncus sed eleifend
              </p>
              <button className="see-button">
                See more <RiArrowDropDownLine />
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12"></div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <div className="row content-collection-data">
                <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                  <span className="eth-section">3,456 ETH</span>
                  <br />
                  <span className="co-volume-section">total volume</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                  <span className="eth-section">0.002 ETH</span>
                  <br />
                  <span className="co-volume-section">floor price</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                  <span className="eth-section">0.003 ETH</span>
                  <br />
                  <span className="co-volume-section">best offer</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                  <span className="eth-section">73%</span>
                  <br />
                  <span className="co-volume-section">listed</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                  <span className="eth-section">9,456</span>
                  <br />
                  <span className="co-volume-section">owners</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                  <span className="eth-section">4%</span>
                  <br />
                  <span className="co-volume-section">unique owners</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12"></div>
          </div>
          <div className="container-fluid">
            <div className="row section-collec py-3 pb-5">
              <div className="col-lg-1 col-md-1 col-sm-1 col-1 py-3">
                <span>
                  <FilterListIcon className="filterlist-icons" />
                </span>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                <div className="reload-bu">
                  <TfiReload className="reolad-tfi-bu" />
                </div>
              </div>
              <div className="col-lg-6 col-md-10 col-sm-10 col-10  py-3">
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
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 py-4  ">
                <span className="view-bu-collection">
                  <img src={View} alt="" className="vv-bu1" />
                  <img src={View2} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
        <div className="row side-bar-collection">
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
          <div className="row">
          <div className="status-tag">
            <span>Status</span>
          </div>
          <div className="bu-toggle">
          <div className="bu-nw-tag">Buy Now </div><div className="check-box-bu"> <Checkbox {...label} style={{color:"#c5c5c5"}} /></div>
          </div>
          <div className="bu-toggle">
          <div className="bu-nw-tag"> On Auction</div> <div className="check-box-bu">  <Checkbox {...label} style={{color:"#c5c5c5"}} /></div>
          </div>
          <hr/>
          <div className="coll-accordion-section">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordion-collect"
        >
          <Typography className="price-ac">Price</Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accordion-collect"
        >
          <Typography className="price-ac">Quantity</Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accordion-collect"
        >
          <Typography className="price-ac">Currency</Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion><hr/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accordion-collect"
        >
          <Typography className="price-ac">category</Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accordion-collect"
        >
          <Typography className="price-ac">category</Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accordion-collect"
        >
          <Typography className="price-ac">category</Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
    </div>

          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 col-12">
          <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </div>
        </div>
        </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
