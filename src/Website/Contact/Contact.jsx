import React, { useState } from "react";
import "./contact.css";
const Contact = () => {

  const [data,setData] = useState({
    firstname:'',
    lastname:'',
    phone:'',
    email:'',
    message:'',
  });
  const formSubmit = (e)=>{
    e.preventDefault();
    alert(`My name is ${data.firstname} ${data.lastname}, my phone number is ${data.phone}, my email is ${data.email} and my message is ${data.message}.`)

  }
  const  inputEvent = (event)=>{
      const {name,value} = event.target;
      setData((preval)=>{
        return{
          ...preval,
          [name]:value,
        };
      })
  }
  return (
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  First Name :
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Joss "
                  name='firstname'
                  value={data.firstname}
                  onChange={inputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Last Name :
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Wick"
                  name='lastname'
                  value={data.lastname}
                  onChange={inputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+921234567890"
                  name='phone'
                  value={data.phone}
                  onChange={inputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name='email'
                  value={data.email}
                  onChange={inputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name='message'
                  value={data.message}
                  onChange={inputEvent}
                ></textarea>
              </div>

              <div class="col-12">
    <button class="btn btn-outline-warning" type="submit">Submit form</button>
  </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
