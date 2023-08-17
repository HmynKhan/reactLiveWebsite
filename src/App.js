// import React from "react";
// import "./App.css";
// // import {BrowseRouter, Routes, Route} from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Redirect ,
// } from "react-router-dom";
// import Compa from "./ComponentRoute/CompA/Compa";
// import Compb from "./ComponentRoute/CompB/Compb";
// import Compc from "./ComponentRoute/CompC/Compc";
// // import Error from "./Error404/Error";

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" exact element={<Compa />} />
//           <Route path="/compb" exact element={<Compb />} />
//           <Route path="/compc" exact element={<Compc />} />
//           {/* <Route path='*' exact element={<Error />}/> */}
//           {/* <Redirect  to="/" /> */}
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// const App = () => {
//   return (
//     <div className="container">
//       <div className="card">
//         <div class="card" style={{width: "5rem;"}}>
//           <img src="https://picsum.photos/30/20" class="card-img-top" alt="..." width={'50px'} height={'200px'}/>
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href="#" class="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>

//         <div class="card" style={{width: "18rem;"}}>
//           <img src="https://picsum.photos/41/30" class="card-img-top" alt="..." width={'20px'} height={'200px'}/>
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href="#" class="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>


//         <div class="card" style={{width: "18rem;"}}>
//           <img src="https://picsum.photos/40/31" class="card-img-top" alt="..." width={'20px'} height={'200px'}/>
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href="#" class="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>


//         <div class="card" style={{width: "18rem;"}}>
//           <img src="https://picsum.photos/41/31" class="card-img-top" alt="..." width={'10px'} height={'300px'}/>
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href="#" class="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Website/Navbar/Navbar'
import Home from './Website/Home/Home'
import Contact from './Website/Contact/Contact'
import About from './Website/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './Website/Services/Services'
import Error from './Website/Errorpage/Error'
import Footer from './Website/Footer/Footer'


const App = () => {
  return (
    <>



    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route exact path='/about'  element={<About />} />
        <Route exact path='/contact'  element={<Contact />} />
        <Route exact path='/services'  element={<Services />} />
        <Route exact path='*' element={<Error />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
