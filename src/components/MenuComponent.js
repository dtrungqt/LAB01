//1. import Component từ React
import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

//2. tạo 1 Component mới dưới dạng class
class Menu extends Component {
  //định nghĩa constructor cho component, nhận 1 tham số gọi là props
  //đây là điều bắt buộc khi định nghĩa 1 class component
  constructor(props) {
    super(props);
  }

  //3. triển khai render() method để hiển thị (render) component lên trình duyệt
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        /////////////////////////////
        //LƯU Ý: BẤT CỨ KHI NÀO TẠO 1 DANH SÁCH HIỂN THỊ CÁC ITEM, TA CẦN CUNG CẤP MỘT KEY PROPERTY CHO MỖI ITEM ĐÓ
        /////////////////////////////
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      // giá trị trả về
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}

//4. export component  từ file này, để có thể import component này ở bất cứ nơi nào trong ứng dụng
export default Menu;
