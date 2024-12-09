import React from 'react';
import { FaBell } from 'react-icons/fa6';
import { FcLike } from 'react-icons/fc';
import { IoIosSettings } from 'react-icons/io';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-500">MORENT</div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center w-full max-w-md bg-gray-100 border border-gray-300 rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Search something here"
          className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
        />
        <div className="text-gray-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a7 7 0 100 14 7 7 0 000-14zM17.293 17.293a1 1 0 01-1.414 0l-3.386-3.386a8.001 8.001 0 111.414-1.414l3.386 3.386a1 1 0 010 1.414z" />
          </svg>
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        {/* Heart Icon */}
        <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
        <FcLike />
        </div>

        {/* Notification Bell */}
        <div className="relative text-gray-500 hover:text-gray-800 cursor-pointer">
        <FaBell />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Settings */}
        <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
        <IoIosSettings />
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="/boy.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
