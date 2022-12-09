import React from "react";
import Browse1 from "../Images/originimg1 copy.png";
import Browse2 from "../Images/originimg2 copy.png";
import Browse3 from "../Images/originimg3 copy.png";
import Browse4 from "../Images/originimg4 copy.png";
import Browse5 from "../Images/originimg5 copy.png";
import Browse6 from "../Images/originimg6 copy.png";

import Card from "react-bootstrap/Card";
import "./Browse.css";

export default function Browse(props) {
  return (
    <div >
      <div className="  browse32" id="browse23">
        <div className="row ">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <Card className="cards1">
              <Card.Img variant="top" src={Browse1} className="card-img-top1" />
              <Card.Body className="card-body1">
                <Card.Title
                  style={{ textAlign: "center" }}
                  className="card-title1"
                >
                  Art
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 browse-card">
            <Card className="cards2">
              <Card.Img variant="top" src={Browse2} className="card-img-top1" />
              <Card.Body className="card-body1">
                <Card.Title
                  style={{ textAlign: "center" }}
                  className="card-title1"
                >
                  Collectibles
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 browse-card">
            <Card className="cards3">
              <Card.Img variant="top" src={Browse3} className="card-img-top1" />
              <Card.Body className="card-body1">
                <Card.Title
                  style={{ textAlign: "center" }}
                  className="card-title1"
                >
                  Music
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
     

        <div className="col-lg-4 col-md-4 col-sm-6 col-12 browse-card">
          <Card className="cards4">
            <Card.Img variant="top" src={Browse4} className="card-img-top1" />
            <Card.Body className="card-body1">
              <Card.Title
                style={{ textAlign: "center" }}
                className="card-title1"
              >
                Photography
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 browse-card">
          <Card className="cards5">
            <Card.Img variant="top" src={Browse5} className="card-img-top1" />
            <Card.Body className="card-body1">
              <Card.Title
                style={{ textAlign: "center" }}
                className="card-title1"
              >
                Recordion
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 browse-card">
          <Card className="cards6">
            <Card.Img variant="top" src={Browse6} className="card-img-top1" />
            <Card.Body className="card-body1">
              <Card.Title
                style={{ textAlign: "center" }}
                className="card-title1"
              >
                Videos
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
    </div>
  );
}
