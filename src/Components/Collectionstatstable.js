import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

// IMPORT FILES

import "./Collectionstatstable.css";
import Tabimg from "../Images/tabimage1.png";
import Tickvector from "../Images/tickimg.png";
import Star from "../Images/star-vector.png";
import { red } from "@mui/material/colors";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell id="table-header">COLLECTION</TableCell>
              <TableCell align="right" id="table-header">
                VOLUME
                <KeyboardArrowDownOutlinedIcon style={{ fontSize: "20px" }} />
              </TableCell>
              <TableCell align="right" id="table-header">
                %CHANGE
                <UnfoldMoreIcon style={{ fontSize: "20px" }} />
              </TableCell>
              <TableCell align="right" id="table-header">
                FLOOR PRICE
                <UnfoldMoreIcon style={{ fontSize: "20px" }} />{" "}
              </TableCell>
              <TableCell align="right" id="table-header">
                SALES <UnfoldMoreIcon style={{ fontSize: "20px" }} />
              </TableCell>
              <TableCell align="right" id="table-header">
                % UNIQUE OWNERS <UnfoldMoreIcon style={{ fontSize: "20px" }} />
              </TableCell>
              <TableCell align="right" id="table-header">
                % ITEMS LISTED
                <UnfoldMoreIcon style={{ fontSize: "20px" }} />
              </TableCell>
              <TableCell align="right" id="table-header"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <span className="s-no">1</span>
                  <img src={Tabimg} alt="" className="tableimg" />
                  <span className="nftname">RENGA</span>
                  <img src={Tickvector} alt="" />
                </TableCell>
                <TableCell align="left">
                  <span id="data-table">3.09ETH</span>
                </TableCell>
                <TableCell align="left">
                  <span id="data-table">-75%</span>
                </TableCell>
                <TableCell align="left">
                  <span id="data-table">12.43 ETH</span>
                </TableCell>
                <TableCell align="left">
                  <span id="data-table">-</span>
                </TableCell>
                <TableCell align="left">
                  <span id="data-table">
                    <strong className="hhub">52% </strong>
                    <br />
                    <strong className="owner954">945 owners</strong>
                  </span>
                </TableCell>
                <TableCell align="left">
                  <span id="data-table">
                    <strong className="hh22">1,189 ETH</strong>
                    <br />
                    <strong className="owner954">132 of 1,832</strong>
                  </span>
                </TableCell>
                <TableCell align="left">
                  <img src={Star} alt="" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
