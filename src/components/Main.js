import React from "react";
import ImageSlider from "./ImageSlider";
import ProductDetail from "./ProductDetail";

class Main extends React.Component {
  render() {
    return (
      <div>
        <ImageSlider />
        <ProductDetail />
      </div>
    );
  }
}

export default Main;
