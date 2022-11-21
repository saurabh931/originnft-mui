import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tabimage1 from "../Images/tabimage1.png"
import Tick from "../Images/tickimg.png"
import "./Hometable.css"
import { Box, Typography } from '@mui/material';
import "../App.css";
import Image1 from "../Images/notableimag1.png" 
import Smallimg1 from "../Images/tabimage4.png";
import Image2 from "../Images/notableimag2.png";
import Smallimg2 from "../Images/smallimage2.png";
import Image3 from "../Images/notableimag3.png";
import Smallimg3 from "../Images/tabimage1.png"
import Storyimage1 from "../Images/storytellingimg1.png"
import Storysmallimg1 from "../Images/tabimage3.png"
import Storyimage2 from "../Images/storyimage2.png"
import Storysmallimg2 from "../Images/tabimage2.png"
import Storyimage3 from "../Images/storyimage3.png"
import Storysmallimage3 from "../Images/tabimage6.png"
import Hotimg1 from "../Images/hotimage1.png"
import Hotsmallimg1 from "../Images/hotshort1.png"
import Hotimg2 from "../Images/hotimage2.png"
import Hotsmallimg2 from "../Images/tabimage1.png"
import Hotimg3 from "../Images/hotimage3.png"
import Hotsmallimg3 from "../Images/tabimage2.png"
import Browse1 from "../Images/Frame243.png"
import Browse2 from "../Images/Frame244.png"
import Browse3 from "../Images/Frame245.png"
import Browse4 from "../Images/Frame246.png"
import Browse5 from "../Images/Frame247.png"
import Browse6 from "../Images/bannervideo.png"



import Card from "react-bootstrap/Card";
import "swiper/css";
import "swiper/css/pagination";



import { Autoplay, Pagination, Navigation } from "swiper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(Tabimage1, 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <>
    <TableContainer component={Paper}>
    <Box>
    <Grid container spacing={2}>
    <Grid item xs={6}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>COLLECTION</TableCell>
            <TableCell align="right">FLOOR PRICE</TableCell>
            <TableCell align="right">VOLUME</TableCell>
            {/* <TableCell align="right">COLLECTION</TableCell>
            <TableCell align="right">FLOOR PRICE</TableCell>
            <TableCell align="right">VOLUME</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span className='s-no'>1</span><img src={Tabimage1} alt='' className='tableimg' /><span className='nftname'>RENGA</span><img src={Tick} alt=''/>
              </TableCell>
              <TableCell align="left"><span className='nftamount'>3.09 ETH</span></TableCell>
              <TableCell align="left"><span className='nftamount'>1,189 ETH</span></TableCell>
          {/*   <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
            <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
            
            
          ))}
        </TableBody>
        
      </Table></Grid>
      
      
      
      <Grid  item xs={6} className='table-2'>
      <Table sx={{ minWidth: 600 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>COLLECTION</TableCell>
            <TableCell align="right">FLOOR PRICE</TableCell>
            <TableCell align="right">VOLUME</TableCell>
           {/*  <TableCell align="right">COLLECTION</TableCell>
            <TableCell align="right">FLOOR PRICE</TableCell>
            <TableCell align="right">VOLUME</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span className='s-no'>1</span><img src={Tabimage1} alt='' className='tableimg'/><span className='nftname'>RENGA</span><img src={Tick} alt=''/>
              </TableCell>
              <TableCell align="left"><span className='nftamount'>3.09 ETH</span></TableCell>
              <TableCell align="left"><span className='nftamount'>1,189 ETH</span></TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
            
            
          ))}
        </TableBody>
        
      </Table></Grid></Grid>
      </Box>
      
      
    </TableContainer>
    
    {/* ----------------------------------------------------NEW AND NOTABLE------------------------------------------------------------- */}
    <Box><Typography variant='h3'>New And Notable</Typography></Box>
    <Box>
     <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={{
          //   clickable: true,
          // }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Image1}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Image2}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Image3}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg3}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Image1}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Image2}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          </Swiper>
          
        </Box>

{/* ---------------------------------------------------STORYTELLING NFT SPOLTLIGHT----------------------------------------------- */}


        <Box><Typography variant='h3'>Storytelling NFTs spotlight</Typography></Box>
        <Box>
     <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={{
          //   clickable: true,
          // }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Storyimage1}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Storysmallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Storyimage2}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Storysmallimg2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Storyimage3}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Storysmallimage3}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Image1}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Image2}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          </Swiper>
          
        </Box>

        {/* ----------------------------------------------------HOT-------------------------------------------------------------------- */}
        <Box><Typography variant='h3'>Hot</Typography></Box>
        <Box>
     <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={{
          //   clickable: true,
          // }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Hotimg1}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Hotsmallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Hotimg2}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Hotsmallimg2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Hotimg3}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Hotsmallimg3}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Image1}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={Image2}
                
              />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons">
                  
                   
                  </span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          </Swiper>
          
        </Box>
        <Box><Typography variant='h3'>Browse by category</Typography></Box>
        <Grid container rowSpacing={2}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
        <img src={Browse1} alt='' className='browse-images'/>
        
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
        <img src={Browse2} alt=''className='browse-images'/>
        
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
        <img src={Browse3} alt=''className='browse-images'/>
        </Grid>

        </Grid>
        <Grid container rowSpacing={2}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
        <img src={Browse4} alt='' className='browse-images'/>
        
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
        <img src={Browse5} alt=''className='browse-images'/>
        
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
        <img src={Browse6} alt=''className='browse-images'/>
        </Grid>

        </Grid>

    </>
  );
}
