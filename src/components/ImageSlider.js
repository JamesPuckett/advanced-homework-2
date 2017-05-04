import React from "react";

class ImageSlider extends React.Component {
  render() {
    return (
      <div className="image-slider">
				
        <ul className="rslides" id="slider1">
          <li><img src="images/slider1.jpg" alt="" /></li>
          <li><img src="images/slider3.jpg" alt="" /></li>
          <li><img src="images/slider1.jpg" alt="" /></li>
        </ul>
					
      </div>
    );
  }
}

export default ImageSlider;
