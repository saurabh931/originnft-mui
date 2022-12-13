import React from "react";
import "./MyCollections.css";
import Navbarnft from "../Navbars/Navbarnft";
import Footer from "../Footer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
// IMPORT IMAGES AND LOGOS
import CloseIcon from "@mui/icons-material/Close";
import Dragimg from "./CollectionsImages/Vector.png";
// import Ethcollection from "./CollectionsImages/Eth.png";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import Micons from "./CollectionsImages/capiM.png"
import Eth1 from "./CollectionsImages/Eth.png";
import Eth from "./CollectionsImages/Eth.png";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

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

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '90%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#6A6A6A",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function MyCollections() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
     
      <div className="container-fluid background-collections-img">
        <div className="collection-section ">
          <h1 className="mycoll-head">My Collections</h1>
          <p className="mycoll-head">
            Create, curate, and manage collections of unique NFT’s to share and
            sell
          </p>
          {/* <button id='button-2' className='create-button'>Create Collection</button> */}
          <div >
            <Button
              id="button-2"
              className="create-button"
              onClick={handleOpen}
            >
              Create Collection
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
            <div className="">
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Create a Collection{" "}
                  <div>
                    <CloseIcon
                      sx={{ border: "0.5px solid #000", borderRadius: "50%" }}
                    />
                  </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <strong style={{ color: "red" }}>*</strong>Required Fields
                </Typography>
                <div className="row mycollections-sc">
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                    <Typography className="highligh-section">
                      Logo image<strong style={{ color: "red" }}>*</strong>
                    </Typography>
                    <Typography className="content-form">
                      This image will also be used for navigation. 350 x 350
                      recommended
                    </Typography>
                    <div className="row">
                      <div className="col-9">
                        <div>
                          <div className="img-drag-circle my-3">
                            <img src={Dragimg} alt="" />
                            <Typography className="tag-image-name-drop">
                              Drop image here
                              <br />
                              or browse
                            </Typography>
                            <div></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3"></div>
                    </div>

                    <div>
                      <Typography className="highligh-section">
                        Featured Image
                      </Typography>
                      <Typography className="content-form">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus diam tellus, rhoncus sed eleifend a, accumsan
                        vel massa.
                      </Typography>
                    </div>
                    <div>
                      <div className="featured-img-box my-3">
                        <div className="fe-bo">
                          <img src={Dragimg} alt="" />
                          <Typography className="tag-image-name-drop">
                            Drop image here
                            <br />
                            or browse
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Typography className="highligh-section">
                        Banner Image
                      </Typography>
                      <Typography className="content-form">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus diam tellus, rhoncus sed eleifend a, accumsan
                        vel massa.
                      </Typography>
                    </div>
                    <div>
                      <div className="featured-img-box2 my-3">
                        <div className="fe-bo">
                          <img src={Dragimg} alt="" />
                          <Typography className="tag-image-name-drop">
                            Drop image here
                            <br />
                            or browse
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Typography className="highligh-section">
                        Name <strong style={{ color: "red" }}>*</strong>
                      </Typography>
                      <input
                        placeholder="Example: The Recordion Music"
                        className="recordion-in"
                      />
                    </div>
                    <div>
                      <Typography className="highligh-section">URL</Typography>
                      <Typography className="content-form">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus diam tellus, rhoncus sed eleifend a, accumsan
                        vel massa.
                      </Typography>
                      <input
                        placeholder="therecordianmusic"
                        className="recordion-in my-3"
                      />
                    </div>
                    <div>
                      <Typography className="highligh-section">URL</Typography>
                      <Typography className="content-form">
                        <strong style={{ color: "#FEC200" }}>Markdown</strong>{" "}
                        syntax is supported. 0 of 1000 characters used
                      </Typography>
                      <textarea className="text-area-mycollections my-4"></textarea>
                    </div>
                    <div>
                      <Typography className="highligh-section">
                        Category
                      </Typography>
                      <Typography className="content-form">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus diam tellus, rhoncus sed eleifend a, accumsan
                        vel massa.
                      </Typography>
                      <button className="cate-bu my-3">+ Add category</button>
                    </div>
                    <div >
                      <Typography className="highligh-section">
                        Links
                      </Typography>
                      <div className="position-relative">
                     <LanguageIcon className="position-absolute icons-input"/> <input className="link-input1" placeholder="yoursite.io"/><br/>
                     <img src={Micons} alt="" className="position-absolute icons-input"/> <input className="link-input" placeholder="https://www.medium.com/@mediumhandle"/><br/>
                     <TelegramIcon className="position-absolute icons-input"/> <input className="link-input3" placeholder="https://t.me/"/></div>
                    </div>
                    <div>
                      <Typography className="highligh-section">
                        Blockchain
                      </Typography>
                      <Typography className="content-form">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus diam tellus, rhoncus sed eleifend a, accumsan
                        vel massa.
                      </Typography>
                      <div>
                        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                          <Select
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                              if (selected.length === 0) {
                                return (
                                  <em id="eth">
                                    <span>
                                      <img
                                        src={Eth1}
                                        alt=""
                                        className="eth-icon"
                                      />
                                    </span>
                                    Ethereum
                                  </em>
                                );
                              }

                              return selected.join(", ");
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem disabled value="">
                              <em className="eth-name">Ethereum</em>
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
                      <div>
                        <Typography className="highligh-section">
                          Payment Tokens
                        </Typography>
                        <Typography className="content-form">
                          These tokens can be used to buy and sell your items.
                        </Typography>
                        <button className="button-eth my-3">
                          <div className="row ">
                            <div className="col-3">
                              <img src={Eth} alt="" />
                            </div>
                            <div className="col-9">
                              <div style={{ textAlign: "justify" }}>
                                <span className="eth-card">ETH</span>
                                <br />
                                <span>Ethereum</span>
                              </div>
                            </div>
                          </div>
                          {/* <p className="d-flex">
                            <img src={Eth} alt="" />
                          </p>
                          <p className="d-flex">
                            <span className="sp-et">ETH</span>
                            <br/>
                            <span>Ethereum</span>
                          </p> */}
                        </button>
                        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                          <Select
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                              if (selected.length === 0) {
                                return (
                                  <em id="eth">
                                    <span>
                                      {/* <img
                                        src={Eth1}
                                        alt=""
                                        className="eth-icon"
                                      /> */}
                                    </span>
                                    + Add token
                                  </em>
                                );
                              }

                              return selected.join(", ");
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem disabled value="">
                              <em className="eth-name">+ Add token</em>
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
                    <div className="row">
                      <div className="col-8">
                        <Typography className="highligh-section">
                          Explicit & sensitive content
                        </Typography>
                        <Typography className="content-form">
                          Set this collections as explicit & sensitive content
                        </Typography>
                      </div>
                      <div className="col-4">
                        <span className="ios-check-button">
                          <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            // label="iOS style"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4"></div>
                  <div className="button-section">
                  <button className="save-bu">Save as draft</button>
                  <button className="save-bu22">Create</button>
                </div>
                </div>
                
              </Box></div>
            </Modal>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row setting-collect">
          <p className="content-section11">No item to display</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyCollections;
