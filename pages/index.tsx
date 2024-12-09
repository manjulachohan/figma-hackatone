
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
      <div className="p-6 bg-gray-100">
        {/* Example CarCard Usage */}
        <CarCard
          name="Tesla Model 3"
          type="Electric"
          image="/images/car1.png"
          fuelCapacity="100 kWh"
          transmission="Automatic"
          capacity="5 People"
          price={100}
          favorite={false}
        />
      </div>
      <Footer/>
      
    </div>
  );
}
