import React from "react";

class TopNav extends React.Component {
  constructor(props){
    super();
    console.log('top nav props', props);
  }
  render() {
    return (
      <div className="top-nav">
        <ul>
          <li><a href="carlights.html">car lights</a></li>
          <li><a href="carwheels.html">Car wheels</a></li>
          <li><a href="carbumpers.html">car bumpers</a></li>
          <li><a href="caradsystem.html">car audiosystem</a></li>
          <li><a href="truckbumpers.html">Truck bumpers</a></li>
          <li><a href="contact.html">Feedback</a></li>
          <div className="clear" />
        </ul>
      </div>
		
    );
  }
}

export default TopNav;
