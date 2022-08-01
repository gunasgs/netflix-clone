import "./Feature.css";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Featured(type) {
  const [movie, setmovie] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(
          `https://netflix-app-clone-1.herokuapp.com/movies`
        );
        setmovie(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <>
      <div className="featured">
        <img src={movie.banner} alt="" className="feature-img" />
        <div className="info">
          <h2>{movie.Title}</h2>
          <div className="movie-type"></div>
          <span className="desc">{movie.desc}</span>
          <div className="buttons-feature">
            <span>
              <Link to="/movieplay" className=" btn play-fea">
                <FaPlay className="me-2 " />
                Play
              </Link>
            </span>

            <button className="info-fea">
              <FaInfoCircle className="me-2 " />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
