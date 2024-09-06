import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ProductCard from "../ProductCard";
import "./style.scss";
import Slider from "react-slick";

const ListProduct = (props) => {
  const { isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleGoToProductDetail = (idProduct) => {
    navigate(`/product/${idProduct}`);
  };
  return (
    <div className="product-item">
      {/* {isLoading && <Spin />} */}
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <ProductCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ListProduct;
