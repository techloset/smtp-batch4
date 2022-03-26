
import React from 'react'
import Routing from './routing/Routing'

export default function App() {
  return (
    <Routing/> 
  )
}



// import React from "react";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// import Contact from "./pages/contact/Contact";
// import About from "./pages/about/About";
// import Services from "./pages/services/Services";
// import Home from "./pages/home/Home";

// export default function App() {
//   return (
//     <div>
      
//       <BrowserRouter>

     
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//       <Link to="/services">Services</Link>


//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/services" element={<Services />} />

//           {/* <Route path="/">
//           <Home/>
//           </Route>

//           <Route path="/about">
//            <About/>
//           </Route>


//           <Route path="/contact">
//            <Contact/>
//           </Route>

//           <Route path="/services">
//            <Services/>
//           </Route> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
