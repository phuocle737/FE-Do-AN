import { Flex, Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { actFetchAllProduct } from "../../redux/features/product/productSlice";
import ProductCard from "../ProductCard";
import "./style.scss";
import Slider from "react-slick";
import ListProduct from "../ListProduct";

const SectionLap = (props) => {
  const dispatch = useDispatch();
  const { allProducts, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(actFetchAllProduct());
  }, []);
  return (
    <div className="section1">
      <nav className="horizontal-menu">
        <ul>
          <li>
            <a href="">Top sản phẩm bán chạy</a>
          </li>
          <li>
            <a href="">Laptop Asus</a>
          </li>
          <li>
            <a href="">Laptop DELL</a>
          </li>
          <li>
            <a href="">Laptop LENOVO</a>
          </li>
          <li>
            <a href="">Laptop Acer</a>
          </li>
        </ul>
      </nav>
      <div className="product-item">
        <ListProduct
          title="lap-top"
          data={allProducts.filter((item) => item.category_1 === "Laptop")}
          dataHeader={[]}
        />
      </div>
    </div>
  );
};

export default SectionLap;
