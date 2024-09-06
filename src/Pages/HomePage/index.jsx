import React, { useEffect } from "react";
import MenuSlider from "../../components/slider";
import FlashSale from "../../components/SectionFs";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAllProduct } from "../../redux/features/product/productSlice";
import SectionLap from "../../components/sectionLap";

import SectionMan from "../../components/sectionMan";
import SectionPC from "../../components/sectionPC";
import SectionCB from "../../components/sectionCB";

const HomePage = () => {
  // Get All Data
  // Xữ lý data theo section
  const dispatch = useDispatch();
  const { allProducts, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(actFetchAllProduct());
  }, []);

  return (
    <div>
      <MenuSlider />
      <FlashSale
        title="Flash-Sale"
        data={allProducts.filter((item) => item.category_2 === "Laptop Dell")}
        dataHeader={[]}
      />

      <SectionLap />
      <SectionPC />
      <SectionMan />
      <SectionCB />
    </div>
  );
};

export default HomePage;
