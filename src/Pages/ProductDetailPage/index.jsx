import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actFetchProductById } from "../../redux/features/product/productSlice";
import { actAddProductToCarts } from "../../redux/features/addCart/cartSlice";
import { makeRandomId } from "../../redux/utils/makeRandomId";
import { Controller, useForm } from "react-hook-form";
import { Button, InputNumber } from "antd";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ProductDetailsPage = () => {
  const params = useParams();
  const idProduct = params.idProduct;
  const dispatch = useDispatch();
  const productInfo = useSelector((state) => state.product.productInfo);
  const [quantityProduct, setQuantityProduct] = useState(1);
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
  const schema = Yup.object().shape({
    style: Yup.string().required("Please choose style"),
  });

  const methods = useForm({
    defaultValues: {
      style: "",
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  useEffect(() => {
    if (idProduct) {
      dispatch(actFetchProductById(idProduct));
    }
  }, [idProduct]);
  const onChangeQuantityProduct = (value) => {
    setQuantityProduct(value);
  };
  const onValid = (formValueOrder) => {
    dispatch(
      actAddProductToCarts({
        ...productInfo,
        ...formValueOrder,
        quantity: quantityProduct,
        idProduct: productInfo.id,
        id: makeRandomId(),
      })
    );
  };
  return (
    <div className="detail-product-card-wrapper">
      <div className="detail-product-card-top">
        <div>
          <img alt="" src={productInfo.imgURL} width={460} height={460} />
          <h1>{productInfo.productName}</h1>
          <p style={{ textDecoration: "line" }}>
            Giá Gốc:{formatNumber(productInfo.price)} đ
          </p>
          <p>Giá KM:{formatNumber(productInfo.priceKM)} đ</p>
          <ul>
            {/* {productInfo.productDetail.map((productDetail) => (
          <li> {productDetail}</li>
        ))} */}
          </ul>
        </div>
        <div className="detail-product-card-top__order">
          <form onSubmit={handleSubmit(onValid)}>
            <div className="detail-product-card__order-input">
              <Controller
                control={control}
                name="quantity"
                render={({ field }) => {
                  return (
                    <InputNumber
                      {...field}
                      className="detail-product-card-top__product-quantity--number"
                      style={{ width: 62, borderRadius: 0 }}
                      min={1}
                      max={99}
                      defaultValue={1}
                      value={quantityProduct}
                      onChange={onChangeQuantityProduct}
                    />
                  );
                }}
              />
            </div>
            <div className="detail-product-card-top__order-btn">
              <div className="detail-product-card-top__order-btn__buy">
                {/* <Button htmlType="submit">Đặt Mua Ngay</Button> */}
              </div>
              {/* <div className="detail-product-card-top__order-btn__gop">
                <Button htmlType="submit">Mua Trả Góp </Button>
              </div> */}
              <div className="detail-product-card-top__order-btn__add-cart">
                <Button htmlType="submit">Thêm Giỏ Hàng</Button>
              </div>
            </div>
          </form>
        </div>
        <div className="detail-product-card-bottom">
          <div>
            <div className="detail-product-card-bottom__product-description__title">
              <h3>Mô tả sản phẩm</h3>
            </div>
            <div className="detail-product-card-bottom__product-description__content">
              <p>{productInfo.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
