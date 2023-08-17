import React from 'react'
import { NavLink } from "react-router-dom";
import './common.css'

const CommonComp = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto"></div>
          <div className="row">
            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h2 className='name'>
                {props.name}<strong className='company'>Stack Intel .io</strong>
              </h2>
              <h4 className="my-3">
                We are the team of talented developer making websites
              </h4>
              <div className="my-3">
                <NavLink to={props.visit} className="btn btn-outline-danger">
                  {props.btnName}
                </NavLink>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 headerImg">
              <div className="shaking-container">
                <img
                  src={props.imgsrc}
                  alt="mage"
                  className="shaking-image"
                  width={"400px"}
                  height={"400px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default CommonComp