import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tabimage1 from "../Images/tabimage1.png";
import Tick from "../Images/tickimg.png";
import "./Hometable.css";
import { Box, Typography } from "@mui/material";
import "../App.css";
import Image1 from "../Images/notableimag1.png";
import Smallimg1 from "../Images/tabimage4.png";
import Image2 from "../Images/notableimag2.png";
import Smallimg2 from "../Images/smallimage2.png";
import Image3 from "../Images/notableimag3.png";
import Smallimg3 from "../Images/tabimage1.png";
import Storyimage1 from "../Images/storytellingimg1.png";
import Storysmallimg1 from "../Images/tabimage3.png";
import Storyimage2 from "../Images/storyimage2.png";
import Storysmallimg2 from "../Images/tabimage2.png";
import Storyimage3 from "../Images/storyimage3.png";
import Storysmallimage3 from "../Images/tabimage6.png";
import Hotimg1 from "../Images/hotimage1.png";
import Hotsmallimg1 from "../Images/hotshort1.png";
import Hotimg2 from "../Images/hotimage2.png";
import Hotsmallimg2 from "../Images/tabimage1.png";
import Hotimg3 from "../Images/hotimage3.png";
import Hotsmallimg3 from "../Images/tabimage2.png";
import Browse1 from "../Images/Frame243.png";
import Browse2 from "../Images/Frame244.png";
import Browse3 from "../Images/Frame245.png";
import Browse4 from "../Images/Frame246.png";
import Browse5 from "../Images/Frame247.png";
import Browse6 from "../Images/bannervideo.png";
import Notableslider from "./Notableslider";
import Storytellingslider from "./Storytellingslider";
import Hotslider from "./Hotslider";
import Tab from "./Tab";
import Browse from "./Browse";

import Card from "react-bootstrap/Card";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(Tabimage1, 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <>
      <div className="Hometable">
        {/* ----------------------------------------------------NEW AND NOTABLE------------------------------------------------------------- */}
        <div className="Section">
          <Box>
            <Typography variant="h3">New And Notable</Typography>
          </Box>

          <Notableslider />
        </div>
        {/* ---------------------------------------------------STORYTELLING NFT SPOLTLIGHT----------------------------------------------- */}
        <div className="Section">
          <Box>
            <Typography variant="h3">Storytelling NFTs spotlight</Typography>
          </Box>

          <Storytellingslider />
        </div>
        {/* ----------------------------------------------------HOT-------------------------------------------------------------------- */}

        <div className="Section">
          <Box>
            <Typography variant="h3">Hot</Typography>
          </Box>

          <Hotslider />
        </div>
        {/* --------------------------Browse----------------------------------- */}

        <Browse />
        {/*  <div className="Section">
          <Box>
            <Typography variant="h3">Browse by category</Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <img src={Browse1} alt="" className="browse-images" />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <img src={Browse2} alt="" className="browse-images" />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <img src={Browse3} alt="" className="browse-images" />
            </Grid>

            <Grid item lg={4} md={4} sm={6} xs={12}>
              <img src={Browse4} alt="" className="browse-images" />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <img src={Browse5} alt="" className="browse-images" />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <img src={Browse6} alt="" className="browse-images" />
            </Grid>
          </Grid>
        </div> */}
      </div>
    </>
  );
}
