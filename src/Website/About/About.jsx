import React from "react";
import "./about.css";
import web from "../../Assest/Images/rocket3.gif";
// import { NavLink } from "react-router-dom";
import CommonComp from "../CommonComponent/CommonComp";

const About = () => {
  return (
    <CommonComp
      name="Welcome to About"
      imgsrc={web}
      visit="/contact"
      btnName="Contact Now"
    />
  );
};

export default About;
