import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";



const Home = () => {
  return (
  <div className="home-page-styles">
    <div className="overlay">
      <h1 className="title-header" >Clark Real Estate</h1>
      <Carousel autoPlay interval={3000} showThumbs={false} infiniteLoop={true} className="home-carousel">
        <div style={{ height: "200px", color: "#fff" }}>this is slide 1</div>
        <div style={{ height: "200px", color: "#fff" }}>this is slide 2</div>
        <div style={{ height: "200px", color: "#fff" }}>this is slide 3</div>
      </Carousel>
      </div>
  </div>
  )
};

export default Home;
