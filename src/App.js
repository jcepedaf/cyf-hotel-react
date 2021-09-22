import React from "react";
import Heading from "./Heading";
import TouristInfoCities from "./TouristInfoCities";
import Bookings from "./components/Bookings";
import "./App.css";
import Footer from "./Footer";
import Restaurant from "./components/Restaurant";

const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="d-flex justify-content-center">
        <TouristInfoCities />
      </div>
      <Bookings />
      <div className="d-flex justify-content-center">
        <Restaurant />
      </div>

      <Footer footer={footer} />
    </div>
  );
};

export default App;
