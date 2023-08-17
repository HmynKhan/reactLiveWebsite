import React from "react";
import "./service.css";
import Card from "../Card/Card";
import Datacard from "../DataCard/Datacard";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h2 className="text-center">Our Services</h2>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Datacard.map((val, index)=>{
                  return <Card  key={index} imgsrc={val.img} title={val.title} description={val.description}/>

              })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
