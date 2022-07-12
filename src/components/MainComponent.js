import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  //định nghĩa state được import từ DISHES
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
      //   trong Lab này, selectedDish chỉ theo dõi dishID chứ ko phải toàn bộ món ăn như ở Lab3 hay Ex1
    };
  }
  //onDishSelect là method để cập nhật selectedDish
  onDishSelect(dishID) {
    this.setState({ selectedDish: dishID });
  }

  render() {
    return (
      <div>
        {/* Hiển thị Navbar  */}
        <Header />
        {/* Hiển thị Menu món ăn  */}
        <Menu
          dishes={this.state.dishes}
          onClick={(dishID) => this.onDishSelect(dishID)}
        />
        {/* Chuyển onClick dưới dạng property vào menu component, khi onClick được gọi sẽ chuyển tham số dishID cho onDishSelect */}

        {/* Hiển thị DishDetail  */}
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        {/* Truyền vào DishDetail Component phần tử món ăn có id là dishID đã chọn từ Menu, onClick ở trên */}
        {/* Kết quả của filter method là 1 hàm, ta chỉ chọn phần tử đầu tiên của hàm đó  */}

        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default Main;
