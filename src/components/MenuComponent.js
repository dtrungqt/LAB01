//1. import Component từ React
import React, { Component } from "react";
import { Media } from "reactstrap";

//2. tạo 1 Component mới dưới dạng class
class Menu extends Component {
  //định nghĩa constructor cho component, nhận 1 tham số gọi là props
  //đây là điều bắt buộc khi định nghĩa 1 class component
  constructor(props) {
    super(props);

    //state được dùng để lưu trữ các thuộc tính liên quan đến component
    this.state = {
      // thuộc tính dishes chứa 1 mảng là thông tin của các món ăn
      dishes: [
        {
          id: 0,
          name: "Uthappizza",
          image: "assets/images/uthappizza.png",
          category: "mains",
          label: "Hot",
          price: "4.99",
          description:
            "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
        },
        {
          id: 1,
          name: "Zucchipakoda",
          image: "assets/images/zucchipakoda.png",
          category: "appetizer",
          label: "",
          price: "1.99",
          description:
            "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
        },
        {
          id: 2,
          name: "Vadonut",
          image: "assets/images/vadonut.png",
          category: "appetizer",
          label: "New",
          price: "1.99",
          description:
            "A quintessential ConFusion experience, is it a vada or is it a donut?",
        },
        {
          id: 3,
          name: "ElaiCheese Cake",
          image: "assets/images/elaicheesecake.png",
          category: "dessert",
          label: "",
          price: "2.99",
          description:
            "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
        },
      ],
    };
  }

  //3. triển khai render() method để hiển thị (render) component lên trình duyệt
  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        /////////////////////////////
        //LƯU Ý: BẤT CỨ KHI NÀO TẠO 1 DANH SÁCH HIỂN THỊ CÁC ITEM, TA CẦN CUNG CẤP MỘT KEY PROPERTY CHO MỖI ITEM ĐÓ
        /////////////////////////////
        <div key={dish.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src={dish.image} alt={dish.name} />
            </Media>

            <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
      );
    });

    return (
      // giá trị trả về
      <div className="container">
        <div className="row">
          <Media list>{menu}</Media>
        </div>
      </div>
    );
  }
}

//4. export component  từ file này, để có thể import component này ở bất cứ nơi nào trong ứng dụng
export default Menu;
