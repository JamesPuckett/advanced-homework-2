import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App(props) {
  console.log('app props ? cat func', props.cat);
  return (
    <div className="App">
      <div className="wrap">
	
        <Header changeCat={props.cat} />
		
        <Main />
				
        <div className="clear" />
        
        <Footer />
        
      </div>
	
    </div>
  );
}

export default App;
