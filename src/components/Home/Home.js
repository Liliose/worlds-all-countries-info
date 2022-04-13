import React from "react";
import "../../styles/home.scss";

// const backgroundImage = require("../../assets/world/w2.png");
const backgroundImage = require("../../assets/world/w1.jpg");
function Home() {
  return (
    <div
      className="home-main-container"
      style={{ backgroundImage: "url(" + backgroundImage + ")" }}
    >
      <div className="home-contents">
        <div className="header-main-container">
          <div className="header-contents">
            <div className="logo-container">
              <img src={require("../../assets/logo2.png")} alt="logo" />
              <h2>World countries</h2>
            </div>
            <div>
              <ul>
                <li>About developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
