import React from "react";
import "./Tab.css";
import Dropdown from "react-bootstrap/Dropdown";
import Hometable from "./Hometable";

function Tab() {
  return (
    <div>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Trending
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Top
          </button>
        </li>

        <li className="dropdown-tab-origin">
          {" "}
          <div className="tab-button">
            <span>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="button-22"
                  className="time-button"
                >
                  24 h
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
            </span>
            <span className="view-bu">
              <button
                variant="success"
                id="button-22"
                className="view-all-button"
              >
                View all
              </button>
            </span>
          </div>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >    <Hometable /></div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
        <Hometable />
        </div>
      </div>
    </div>
  );
}

export default Tab;
