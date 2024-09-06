import { generatePath, useNavigate, useParams } from "react-router";
import { ROUTES } from "../../constants/router";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { actFetchProductById } from "../../redux/features/product/productSlice";
import { useEffect } from "react";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const idProduct = useParams.idProduct;
  const productInfo = useSelector((state) => state.product.productInfo);
  const { data } = props;
  console.log(data);
  const formatNumber = (num) => {
    let numString = "";
    while (num > 0) {
      let div = num % 1000;
      num = Math.floor(num / 1000);
      if (num !== 0) {
        if (div < 10) {
          div = "00" + div;
        } else if (div < 100) {
          div = "0" + div;
        }
        numString = "," + div + numString;
      } else {
        numString = div + numString;
      }
    }
    return numString;
  };
  // useEffect(() => {
  //   dispatch(actFetchProductById(idProduct));
  // }, [idProduct]);
  const ProductDetailsPage = (idProduct) => {
    navigate(`/product/${idProduct}`);
  };
  return (
    <div className="product-card">
      <img className="product-card__img" src={data.imgURL} />
      <div
        className="product-card__content"
        onClick={() => navigate(`/products/${data.id}`)}
      >
        <p className="product-card__name">{data.productName}</p>
        <p className="product-card__price" style={{ textDecoration: "line" }}>
          Giá Gốc: {formatNumber(data.price)} đ
        </p>
        <p className="product-card__priceKM" style={{ color: "red" }}>
          Giá KM: {formatNumber(data.priceKM)} đ
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
