import React from "react";
import Image from "next/image";

// Define the CarCard component
const CarCard: React.FC<{
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  discountedPrice?: number;
  favoriteIcon: string;
}> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  discountedPrice,
  favoriteIcon,
}) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Favorite Icon */}
      <img
        src={favoriteIcon}
        alt="Favorite"
        className="absolute top-4 right-4 w-6 cursor-pointer"
      />

      {/* Car Image */}
      <img
        src={image}
        alt={`${name} car`}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Car Details */}
      <div className="mb-2">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{type}</p>
      </div>

      {/* Specifications */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>{fuelCapacity}</span>
        <span>{transmission}</span>
        <span>{capacity}</span>
      </div>

      {/* Pricing and Rent Button */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold text-gray-900">${price}/day</p>
          {discountedPrice && (
            <p className="text-sm line-through text-gray-400">
              ${discountedPrice}
            </p>
          )}
        </div>
        <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Rent Now
        </button>
      </div>
    </div>
  );
};

// Define the CarRecommendationPage component
const CarRecommendationPage: React.FC = () => {
  const cars = [
    {
      name: "Koenlgsegg",
      type: "Sport",
      image: "/Car-2.png",
      fuelCapacity: "100 kWh",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 99.00,
      favoriteIcon: "/heart-icon.png",
    },
    {
      name: "NissanGT-R",
      type: "Sport",
      image: "/Car-1.png",
      fuelCapacity: "50 L",
      transmission: "Manual",
      capacity: "5 seats",
      price: 80.00,
      discountedPrice: 100.00,
      favoriteIcon: "/heart-icon.png",
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      image: "/Car-3.png",
      fuelCapacity: "60 L",
      transmission: "Automatic",
      capacity: "4 seats",
      price: 96.00,
      favoriteIcon: "/heart-icon.png",
    },
    {
      name: "Nisstan GT-R",
      type: "Sport",
      image: "/Car-1.png",
      fuelCapacity: "45 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 80.00,
      discountedPrice: 100.00,
      favoriteIcon: "/heart-icon.png",
    },
    <div></div>
    {
      name: "AllNewRush",
      type: "SUV",
      image: "/Car-13.png",
      fuelCapacity: "85 L",
      transmission: "Automatic",
      capacity: "7 seats",
      price: 72.00,
      discountedPrice: 100.00,
      favoriteIcon: "/heart-icon.png",
    },
    {
      name: "CR-V",
      type: "SUV",
      image: "/Car-7.png",
      fuelCapacity: "70 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 80.00,
      favoriteIcon: "/heart-icon.png",
    },
    {
      name: "AllNEWTerios",
      type: "SUV",
      image: "/Car-8.png",
      fuelCapacity: "60 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 74.00,
      discountedPrice: 55,
      favoriteIcon: "/heart-icon.png",
    },
    {
      name: "CR-V",
      type: "SUV",
      image: "/Car-7.png",
      fuelCapacity: "50 L",
      transmission: "Manual",
      capacity: "5 seats",
      price: 80.00,
      favoriteIcon: "/heart-icon.png",
    },
    {
      name: "MGZXExclusicen",
      type: "Hatchback",
      image: "/Car-12.png",
      fuelCapacity: "90 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 76.00,
      favoriteIcon: "/heart-icon.png",
    },
    {
      name: "NewMGZS",
      type: "SUV",
      image: "/Car-9.png",
      fuelCapacity: "65 L",
      transmission: "Automatic",
      capacity: "4 seats",
      price: 80.00,
      favoriteIcon: "/heart-icon.png",
    },
    {
      name: "MGZXExcite",
      type: "Hatchback",
      image: "/Car-10.png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 74.00,
      favoriteIcon: "/heart-icon.png",
    },
    {
      name: "NewMGZS",
      type: "SUV",
      image: "/Car-9.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 80.00,
      favoriteIcon: "/heart-icon.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3">
      {cars.slice(0, 12).map((car, index) => (
        <CarCard key={index} {...car} />
      ))}
    </div>
  );
};

export default CarRecommendationPage;
