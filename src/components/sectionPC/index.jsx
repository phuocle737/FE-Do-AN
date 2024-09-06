import { Flex, Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAllProduct } from "../../redux/features/product/productSlice";
import "./style.scss";
import ListProduct from "../ListProduct";

const SectionPC = (props) => {
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
            <a href="">PC Văn Phòng</a>
          </li>
          <li>
            <a href="">PC Gaming</a>
          </li>
        </ul>
      </nav>
      <div className="product-item">
        <ListProduct
          title="PC"
          data={allProducts.filter((item) => item.category_1 === "PC Gaming")}
          dataHeader={[]}
        />
      </div>
    </div>
  );
};

export default SectionPC;
