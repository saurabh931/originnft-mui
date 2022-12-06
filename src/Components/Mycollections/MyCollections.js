import React from "react";
import "./MyCollections.css";
import Navbarnft from "../Navbars/Navbarnft";
import Footer from "../Footer";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// IMPORT IMAGES AND LOGOS
import CloseIcon from "@mui/icons-material/Close";
import Dragimg from "./CollectionsImages/Vector.png";
import Ethcollection from "./CollectionsImages/Eth.png";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MyCollections() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navbarnft />
      <div className="container-fluid background-collections-img">
        <div className="collection-section">
          <h1>My Collections</h1>
          <p>
            Create, curate, and manage collections of unique NFT’s to share and
            sell
          </p>
          {/* <button id='button-2' className='create-button'>Create Collection</button> */}
          <div>
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
                <div className="row">
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
                          <div className="img-drag-circle">
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
                      <div className="featured-img-box">
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
                      <div className="featured-img-box2">
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
                        className="recordion-in"
                      />
                    </div>
                    <div>
                      <Typography className="highligh-section">URL</Typography>
                      <Typography className="content-form">
                        <strong style={{ color: "#FEC200" }}>Markdown</strong>{" "}
                        syntax is supported. 0 of 1000 characters used
                      </Typography>
                      <textarea className="text-area-mycollections"></textarea>
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
                      <button className="cate-bu">+ Add category</button>
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
                      <span>
                        <img src={Ethcollection} alt="" />
                        <DropdownButton
                          id="dropdown-basic-button"
                          className="eth-bu-mycoll"
                          title="Ethereum"
                        >
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </DropdownButton>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4"></div>
                </div>
              </Box>
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
