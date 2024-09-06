import {
  FacebookOutlined,
  GoogleOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer-container container">
      <div className="footer-container__content">
        <h3>THÔNG TIN CHUNG</h3>
        <p>Giới thiệu về công ty</p>
        <p>Thông tin tuyển dụng</p>
        <p>Tin tức</p>
        <p>Tin khuyễn mãi</p>
      </div>

      <div className="footer-container__content">
        <h3>HỖ TRỢ KHÁCH HÀNG</h3>
        <p>Hướng dẫn mua hàng trực tuyến</p>
        <p>Hướng dẫn thanh toán</p>
        <p>Hướng dẫn mua hàng trả góp</p>
        <p>Liên hệ góp ý</p>
      </div>
      <div className="footer-container__content">
        <h3>CHÍNH SÁCH CHUNG</h3>
        <p>Chính sách vận chuyển, giao hàng</p>
        <p>Chính sách bảo hàng</p>
        <p>Chính sách đổi hàng</p>
        <p>Bảo mật thông tin khách hàng</p>
      </div>
      <div className="footer-container__content">
        <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
        <div className="footer-container__content__contact">
          <FacebookOutlined />
          FaceBook
        </div>
        <div className="footer-container__content__contact">
          <YoutubeOutlined /> Youtube
        </div>
        <div className="footer-container__content__contact">
          <GoogleOutlined /> Google
        </div>
      </div>
    </div>
  );
};

export default Footer;
