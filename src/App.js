import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";

import Bookings from "./components/Bookings";
import "./App.css";
import Footer from "./Footer";

const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer footer={footer} />
    </div>
  );
};

export default App;
