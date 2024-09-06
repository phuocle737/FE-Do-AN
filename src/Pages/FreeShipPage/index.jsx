import React from "react";
import imgcsFre from "../../assets/imgs/chinh-sach-van-chuyen-hang-hoa-1331x911-2.jpg";
import "./style.scss";
const FreeShipPage = () => {
  return (
    <div className="free-ship-container">
      <h1>Chính sách Giao hàng</h1>
      <h2>CHÍNH SÁCH VẬN CHUYỂN HÀNG HÓA</h2>
      <img src={imgcsFre} alt="" />
      <h2>BẢNG GIÁ DỊCH VỤ VẬN CHUYỂN HÀNG HÓA</h2>
      <table>
        <thead>
          <tr>
            <th>Theo giá trị đơn hàng</th>
            <th>Số Km được Miễn Phí</th>
            <th>Thời gian đáp ứng</th>
            <th>Thu phí</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Từ 200.000đ đến 500.000đ</td>
            <td></td>
            <td>Giao trong ngày</td>
            <td>
              30.000đ /1 lần giao (trong vòng 10km) <br />
              Từ km thứ 11 thu phí 6.000/km .
            </td>
          </tr>
          <tr>
            <td>Trên 500.000đ</td>
            <td>10km</td>
            <td>Giao hàng trong 4h</td>
            <td>Từ km thứ 11 thu phí 6.000/km.</td>
          </tr>
          <tr>
            <td>Trên 3 triệu đồng</td>
            <td>20km</td>
            <td>Giao hàng trong 4h</td>
            <td>
              Từ km thứ 21 thu phí 6.000/km (chở hàng bằng ô tô thu phí
              10.000đ/km).
            </td>
          </tr>
          <tr>
            <td>Trên 10 triệu đồng</td>
            <td>30km</td>
            <td>Giao hàng trong 4h</td>
            <td>
              Từ km thứ 31 thu phí 6.000/km (chở hàng bằng ô tô thu phí
              10.000đ/km).
            </td>
          </tr>
          <tr>
            <td>Trên 50 triệu đồng</td>
            <td>40km</td>
            <td>Theo thỏa thuận với khách hàng</td>
            <td>
              Từ km thứ 41 thu phí 10.000/km hoặc theo tư vấn từ nhân viên bán
              hàng.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        {" "}
        Trong trường hợp Quý khách có thắc mắc vui lòng liên hệ tổng đài: 1900
        0323 - Nhấn phím 0.
        <br /> - Trách nhiệm của bên giao hàng (cung cấp dịch vụ Logistic): chịu
        trách nhiệm về thời gian giao hàng, tình trạng hàng hóa đảm bảo khi đến
        tay khách hàng. Trường hợp xảy ra sự cố do lỗi của bên giao hàng hoàn
        toàn chịu trách nhiệm và chịu bồi thường theo giá trị sản phẩm.
        PLHtechnology.com.vn sẽ không chịu trách nhiệm do lỗi phát sinh chủ quan
        của bên giao hàng, trường hợp bất khả kháng chúng tôi sẽ hỗ trợ 50% tổn
        thất.
        <br /> -Trường hợp phát sinh chậm trễ trong việc giao hàng,
        PLHtechnology.com.vnsẽ liên hệ, thông tin kịp thời cho khách hàng và tạo
        cơ hội để khách hàng có thể hủy hợp đồng nếu muốn.
      </p>
    </div>
  );
};

export default FreeShipPage;
