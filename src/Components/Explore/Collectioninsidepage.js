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
import Checkbox from "@mui/material/Checkbox";

// ACCORDION IMPORT FILE
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// IMPORT
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import View from "../../Images/view-grid.png";
import View2 from "../../Images/Group8926.png";
import discordicon8 from "../../Images/icons8-discord.svg";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Dropdown from "react-bootstrap/Dropdown";
import { TfiReload } from "react-icons/tfi";

// IMPORT
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// IMPORT IMAGE
import Cardimgcoll from "./Collection-images/Rectangle10.png";
import Cardimgcoll1 from "./Collection-images/Rectangle11.png";
import Cardimgcoll2 from "./Collection-images/Rectangle12.png";
import Cardimgcoll3 from "./Collection-images/Rectangle13.png";

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
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Collectioninsidepage() {
  return (
    <>
   
      <div className="container-fluid background-images-collections"></div>
      <div className="container-fluid ">
        <div className="row g-0 mx-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <img src={ProfileImage} alt="" className="profile-setting-img" />
            <h6 className="profile-name-inside mx-2">
              Gamefi Legends <img src={Checkvector} alt="" />
            </h6>
            <h6 className="sub-title-profile mx-2">
              by Crypto Khem
              <img src={Checkvector} alt="" />
            </h6>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <span className="icons-collections-inside">
              <LanguageOutlinedIcon style={{ color: "#6A6A6A" }} />
              <svg
            
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                className="icons-setting-width"
              >
                <path d="M19.98,5.69c-1.68-1.34-4.08-1.71-5.12-1.82h-0.04c-0.16,0-0.31,0.09-0.36,0.24c-0.09,0.23,0.05,0.48,0.28,0.52 c1.17,0.24,2.52,0.66,3.75,1.43c0.25,0.15,0.31,0.49,0.11,0.72c-0.16,0.18-0.43,0.2-0.64,0.08C15.56,5.38,12.58,5.3,12,5.3 S8.44,5.38,6.04,6.86C5.83,6.98,5.56,6.96,5.4,6.78C5.2,6.55,5.26,6.21,5.51,6.06c1.23-0.77,2.58-1.19,3.75-1.43 c0.23-0.04,0.37-0.29,0.28-0.52c-0.05-0.15-0.2-0.24-0.36-0.24H9.14C8.1,3.98,5.7,4.35,4.02,5.69C3.04,6.6,1.09,11.83,1,16.46 c0,0.31,0.08,0.62,0.26,0.87c1.17,1.65,3.71,2.64,5.63,2.78c0.29,0.02,0.57-0.11,0.74-0.35c0.01,0,0.01-0.01,0.02-0.02 c0.35-0.48,0.14-1.16-0.42-1.37c-1.6-0.59-2.42-1.29-2.47-1.34c-0.2-0.18-0.22-0.48-0.05-0.68c0.18-0.2,0.48-0.22,0.68-0.04 c0.03,0.02,2.25,1.91,6.61,1.91s6.58-1.89,6.61-1.91c0.2-0.18,0.5-0.16,0.68,0.04c0.17,0.2,0.15,0.5-0.05,0.68 c-0.05,0.05-0.87,0.75-2.47,1.34c-0.56,0.21-0.77,0.89-0.42,1.37c0.01,0.01,0.01,0.02,0.02,0.02c0.17,0.24,0.45,0.37,0.74,0.35 c1.92-0.14,4.46-1.13,5.63-2.78c0.18-0.25,0.26-0.56,0.26-0.87C22.91,11.83,20.96,6.6,19.98,5.69z M8.89,14.87 c-0.92,0-1.67-0.86-1.67-1.91c0-1.06,0.75-1.92,1.67-1.92c0.93,0,1.67,0.86,1.67,1.92C10.56,14.01,9.82,14.87,8.89,14.87z M15.11,14.87c-0.93,0-1.67-0.86-1.67-1.91c0-1.06,0.74-1.92,1.67-1.92c0.92,0,1.67,0.86,1.67,1.92 C16.78,14.01,16.03,14.87,15.11,14.87z" />
              </svg>
              <InstagramIcon className="icons-setting-width" />
              <TwitterIcon className="icons-setting-width" />
              <StarBorderOutlinedIcon className="icons-setting-width" />
              <ShareIcon className="icons-setting-width" />
              <MoreHorizIcon className="icons-setting-width11" />
            </span>
          </div>
        </div>
        <div className="container-fluid mx-5">
          <div className="row g-0">
            <div
              className="col-lg-8 col-md-8 col-sm-12 col-12"
              // style={{ marginLeft: "90px" }}
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
        <div className="container-fluid mx-5">
          <div className="row g-0">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <div className="row g-0 content-collection-data">
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
          <div className="container-fluid ">
            <div className="row g-0 section-collec py-3 pb-5">
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
        <div className="container-fluid mx-5">
          <div className="row g-0 side-bar-collection">
            <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row g-0">
                <div className="status-tag">
                  <span>Status</span>
                </div>
                <div className="bu-toggle">
                  <div className="bu-nw-tag">Buy Now </div>
                  <div className="check-box-bu">
                    {" "}
                    <Checkbox {...label} style={{ color: "#c5c5c5" }} />
                  </div>
                </div>
                <div className="bu-toggle">
                  <div className="bu-nw-tag"> On Auction</div>{" "}
                  <div className="check-box-bu">
                    {" "}
                    <Checkbox {...label} style={{ color: "#c5c5c5" }} />
                  </div>
                </div>
                <hr />
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
                  </Accordion>
                  <hr />
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

            {/*-------------------------------------------------------------------------CARDS-IMPORT-----------------------------------------------------------  */}
            <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row g-0 mx-5">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                  <Card>
                    <Card.Img variant="top" src={Cardimgcoll} />
                    <Card.Body>
                      <Card.Title className="cards-title-name">
                        Red Angrybol
                      </Card.Title>
                      <Card.Text>0.003 ETH</Card.Text>
                      <span className="end-time-card">Ends in 23 hours</span>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                  <Card>
                    <Card.Img variant="top" src={Cardimgcoll1} />
                    <Card.Body>
                      <Card.Title className="cards-title-name">
                        Red Angrybol
                      </Card.Title>
                      <Card.Text>0.003 ETH</Card.Text>
                      <span className="end-time-card">Ends in 23 hours</span>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                  <Card>
                    <Card.Img variant="top" src={Cardimgcoll2} />
                    <Card.Body>
                      <Card.Title className="cards-title-name">
                        Red Angrybol
                      </Card.Title>
                      <Card.Text>0.003 ETH</Card.Text>
                      <span className="end-time-card">Ends in 23 hours</span>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                  <Card>
                    <Card.Img variant="top" src={Cardimgcoll3} />
                    <Card.Body>
                      <Card.Title className="cards-title-name">
                        Red Angrybol
                      </Card.Title>
                      <Card.Text>0.003 ETH</Card.Text>
                      <span className="end-time-card">Ends in 23 hours</span>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
