import React from "react";
import Featured from "../../components/Feature";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import List from "../../components/list/List";
import Nav from "../../components/Nav";
import Slider from "../../components/Slider";
import "../Home/Netflix.css";

function Netflix(slider, slider2) {
  return (
    <div>
      <Nav />
      <Featured />
      <List />
      <Slider slider={slider} />
      <Slider slider={slider2} />
      <Slider />
      <Slider />
      <Footer />
    </div>
  );
}

export default Netflix;
