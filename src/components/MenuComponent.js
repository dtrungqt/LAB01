//1. import React
import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

//Tạo functional component theo cách khai báo
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />

      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

//Tạo functional component theo cách biểu thức - ở đây sd hàm mũi tên
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
        {/* onClick được gửi tới bởi Main component  */}
      </div>
    );
  });

  return (
    // giá trị trả về
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

// export component  từ file này, để có thể import component này ở bất cứ nơi nào trong ứng dụng
export default Menu;
