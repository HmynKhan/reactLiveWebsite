import React from "react";
import './card.css'
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto ">
        <div class="card">
          <img src={props.imgsrc} class="card-img-top" alt="img"  width={"200px"} height={"180px"} />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              {props.description}
            </p>
            <NavLink to="" className="btn btn-outline-warning">
              Visit
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
