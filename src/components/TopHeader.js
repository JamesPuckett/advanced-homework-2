import React from "react";

class TopHeader extends React.Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div className="top-header">
        <div className="top-header-left">
          <ul>
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Specials</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="top-header-right">
          <ul>
            <li><a href="#">CURRENCY:</a></li>
            <li>
              <select>
                <option>Dollar</option>
                <option>Euro</option>
                <option>Pound</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    );
  }
}

export default TopHeader;