import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  //định nghĩa state được import từ DISHES
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        {/* Hiển thị Navbar  */}
        <Header />

        {/* Router  */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          {/* Sử dụng exact có nghĩa là path phải khớp chính xác với path sau đó (ở
          đây là /menu). Bởi vì ta định tuyến (route) đến DishDetail Component
          và sử dụng một đường dẫn bắt đầu bằng /menu */}

          {/* Đặt đường dẫn mặc định */}
          {/* nếu route không khớp với bất kỳ tuyến nào:
          /home nay /menu thì sẽ chuyển hướng tới /home */}
          <Redirect to="/home" />
        </Switch>

        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default Main;
