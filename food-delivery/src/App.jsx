import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Placeorder from "./Pages/Placeorder/Placeorder";
import Footer from "./Components/Footer/Footer";
import Loginpop from "./Components/Login/Loginpop";

const App = () => {

  const [showLogin, setshowLogin] = useState(false);
  return (
    <>
    {showLogin?<Loginpop setshowLogin={setshowLogin} />:<> </>}
      <div className="app">
        <Navbar setshowLogin= {setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
