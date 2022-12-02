import React from "react";
import "./Profilesettingslide.css";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Featuredvector from "../../Images/Vector.png";
import { Link } from "react-router-dom";
import Navbarnft from "../Navbars/Navbarnft";
import "./AccountSupport.css";

// ACCORDION IMPORT
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// INPUT
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Footer from "../Footer";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Profilesettingslide() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <Navbarnft />
      <div className="container-fluid background-profile-setting"></div>
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-2 col-md-2 col-sm-12 col-12 section-color">
              <div>
                <ul className="listed-section">
                  <span className="setting-sections">Setting</span>
                  <Link to="/profilesetting">
                    <li className="section-list">
                      <span>
                        <PermIdentityOutlinedIcon className="icons-tabs" />
                      </span>{" "}
                      <span className="content-style">Profile</span>
                    </li>
                  </Link>
                  <Link to="/notifications">
                    {" "}
                    <li className="section-list">
                      <span>
                        <NotificationsOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Notifications</span>
                    </li>
                  </Link>
                  <Link to="/featureditems">
                    {" "}
                    <li className="section-list">
                      <span>
                        <img src={Featuredvector} alt="" className="iconsddd" />
                      </span>{" "}
                      <span className="content-style">Featured Items</span>
                    </li>
                  </Link>
                  <Link to="/offers">
                    {" "}
                    <li className="section-list">
                      <span>
                        <LocalOfferOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Offers</span>
                    </li>
                  </Link>
                  <Link to="/accountsupport">
                    {" "}
                    <li className="section-list">
                      <span>
                        <VerifiedUserOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Account support</span>
                    </li>
                  </Link>
                  <Link to="/earnings">
                    {" "}
                    <li className="section-list">
                      <span>
                        <MonetizationOnOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Earnings</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-12 col-12">
              <div className="section-fit">
                <div className="row">
                  <div className="col-lg-8 col-md-9 col-sm-12 col-12">
                    <div>
                      <span className="account-head">Account support </span>
                      <p className="account-sec">
                        We got you the help you need with your account.
                      </p>
                    </div>
                    <div className="accordion-width">
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className="accordion-1">
                            General help
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className="para-typography">
                            Visit our
                            <strong style={{ color: "#FEC200" }}>
                              {" "}
                              help center{" "}
                            </strong>
                            to learn how to get started with buying, selling,
                            and creating.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography className="accordion-1">
                            Contact Origins NFT Support
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className="para-typography">
                            Having trouble finding the exact answer to what
                            you’re looking for? You can
                            <strong style={{ color: "#FEC200" }}>
                              {" "}
                              submit a request{" "}
                            </strong>
                            here to contact our representative.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography className="accordion-1">
                            Help with a compromised account
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className="para-typography">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce condimentum purus non odio congue, ut
                            consectetur metus malesuada. Integer augue nulla,
                            dignissim at mauris quis, vehicula vulputate diam.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>

                    {/* INPUT PLACEHOLDER */}
                    <div>
                      <div>
                        <FormControl
                          sx={{ m: 0, width: 683, mt: 3 }}
                          className="issue-account"
                        >
                          <Select
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                              if (selected.length === 0) {
                                return (
                                  <em className="select-section">
                                    Let us know the issue
                                  </em>
                                );
                              }

                              return selected.join(", ");
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem disabled value="">
                              <em>Placeholder</em>
                            </MenuItem>
                            {names.map((name) => (
                              <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                              >
                                {name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <button className="lock-button">Lock account</button>
                    <div>
                      <div>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className="accordion-next"
                          >
                            <Typography className="accordion-1">
                              Cancel all Ethereum listings and offers
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="para-typography11">
                              This method saves gas compared to cancelling on
                              individual listing or offer.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                      <button className="nothing-account">
                        Nothing to show
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-12 col-12"></div>
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
