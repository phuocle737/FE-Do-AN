import React from "react";
import Slider from "react-slick";
import imgs1 from "./slider1.jpg";
import imgs2 from "./slider2.png";
import imgs3 from "./slider3.jpg";
import imgs4 from "./slider4.png";
import imgP1 from "../../assets/imgs/dealgiahoi.png";
import imgP2 from "../../assets/imgs/laptoptuutruong.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import "./style.scss";
import { Flex } from "antd";

const MenuSlider = () => {
  let sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container">
      <div
        style={{
          position: "absolute",
          width: 635,
          height: 360,
          top: -392,
          left: 257,
        }}
      >
        <div className="slider-container_slide">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            <div className="meu-slider">
              <img src={imgs1} height={360} alt="" />
            </div>
            <div className="meu-slider">
              <img src={imgs2} height={360} alt="" />
            </div>
            <div className="meu-slider">
              <img src={imgs3} height={360} alt="" />
            </div>
            <div className="meu-slider">
              <img src={imgs4} height={360} alt="" />
            </div>
          </Slider>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: -408,
          right: 18,
        }}
      >
        <div
          className="slider-container_image"
          style={{ display: "flex", flexDirection: "column", width: 288 }}
        >
          <img src={imgP1} alt="" />
          <img src={imgP2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MenuSlider;
