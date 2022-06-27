import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import "../../node_modules/video-react/dist/video-react.css";

function Hero() {
  return (
    <div class="hero-container">
      <section class="netflix-home-video">
        <video src="../assets/video-tv-in-0819.m4v" autoplay muted loop></video>
        <div class="content">
          <section class="left">
            <img alt="" />

            <div class="d-flex hero-btn  ">
              <button class=" btn-hero btn btn-light m-2">
                <FaPlay className="me-2 " />
                Play Now
              </button>
              <button class="btn btn-secondary m-2">
                <FaInfoCircle className="me-2 " />
                More Info
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Hero;
