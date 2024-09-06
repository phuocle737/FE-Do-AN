import React from "react";
import ProductCard from "../ProductCard";
import "./style.scss";
import { Flex } from "antd";
import imgFlashSale from "../../assets/imgs/deal-moi-ngay---3001.jpg";
import CountdownTimer from "../countdowTimer";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const FlashSale = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { data } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const flashSaleEndDate = new Date();
  flashSaleEndDate.setDate(flashSaleEndDate.getDate() + 2);
  const handleGoToProductDetail = (idProduct) => {
    navigate(`/product/${idProduct}`);
  };
  return (
    <div className="flashSale-container">
      <div className="flashSale-container__flashSale">
        <div className="flashSale-container__flashSale__iconWatch">
          <img
            src="https://www.anphatpc.com.vn/template/2024/images/deal-clock.png"
            alt=""
          />
        </div>
        <div className="flashSale-container__flashSale__text">
          <h3>FLASH SALE</h3>
        </div>
        <div className="flashSale-container__imgFlashSale">
          <img src={imgFlashSale} alt="" />
        </div>
        <div className="flashSale-container__time-sale">
          <div className="flashSale-container__time-sale__event-start">
            <p>Thời gian diễn ra: {currentDate.toLocaleDateString()}</p>
          </div>
          <div className="flashSale-container__time-sale__event-end">
            <p>Kết thúc sau:</p>
            <CountdownTimer targetDate={flashSaleEndDate} />
          </div>
        </div>
      </div>
      <div className="flashSale-container__product">
        <Flex gap={10}>
          {data.map((item) => {
            return <ProductCard data={item} />;
          })}
        </Flex>
      </div>
    </div>
  );
};

export default FlashSale;
