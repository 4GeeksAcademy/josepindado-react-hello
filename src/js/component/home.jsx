import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";
import ForeHead from "./ForeHead";

//create your first component
const Home = () => {
  return (
    <div>
    <Navbar />
	<ForeHead />    	
	<Cards />
    <Footer />
    </div>
  );
};

export default Home;