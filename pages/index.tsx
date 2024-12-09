
import React from "react";
import Navbar from "./components/navber";
import Footer from "./components/footer";
import Herosection from "./components/herosection";
import CarCard from "./components/carcard";






export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <CarCard/>
      <Footer/>
      
    </div>
  );
}
