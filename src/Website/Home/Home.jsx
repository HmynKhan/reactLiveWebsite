import React from "react";
import "./home.css";
import web from "../../Assest/Images/homepa.gif";
import CommonComp from "../CommonComponent/CommonComp";


const Home = () => {
  return (
        <CommonComp       
        name='Grow your business with'
        imgsrc={web}
        visit="/services"
        btnName="Get Started"/>
  );
};

export default Home;
