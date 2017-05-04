import React from "react";
import TopHeader from "./TopHeader";
import SubHeader from "./SubHeader";
import TopNav from "./TopNav";

function Header(props) {
  console.log('header props', props)
  return (
    <div className="header">

      <TopHeader />  
    
      <div className="clear" />
    
      <SubHeader />
    
      <div className="clear" />
      
      <TopNav changeCat={props.changeCat} />
    
    </div>
			
  );
}

export default Header;
