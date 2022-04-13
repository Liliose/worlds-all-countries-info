import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { bgImages, getBgImage } from "../../config";

import "../../styles/home.scss";

function Home() {
  let currentImageIndex = 0;
  const [backgroundImage, setBackgroundImage] = useState(bgImages[0]);
  const x = () => {};
  useEffect(() => {
    const interval = setInterval(() => {
      currentImageIndex += 1;
      if (bgImages[currentImageIndex]) {
        setBackgroundImage(bgImages[currentImageIndex]);
      } else {
        setBackgroundImage(bgImages[0]);
        currentImageIndex = 0;
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="home-main-container"
      style={{ backgroundImage: "url(" + getBgImage(backgroundImage) + ")" }}
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

        {/* home search bar */}
        <div className="home-search-bar-container">
          <form>
            <input placeholder="Search country ..." />
            <div className="search-icon-container">
              <FaSearch size={20} color="black" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
