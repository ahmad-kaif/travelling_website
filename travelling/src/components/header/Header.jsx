import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const dropdownItems = {
    "Global Vacation Packages": ["Europe Tour", "Asian Adventures", "African Safari", "American Getaways"],
    "India Trip Bundles": ["Golden Triangle", "Kerala Backwaters", "Himalayan Treks", "Rajasthan Heritage"],
    "Bike Trips": ["Leh Ladakh", "Spiti Valley", "Western Ghats", "Rajasthan Bike Tour"],
    "Honeymoon Packages": ["Maldives", "Goa", "Shimla", "Andaman"],
    "Community Trips": ["Yoga Retreats", "Spiritual Journeys", "Volunteer Programs", "Cultural Immersions"],
    "Corporate Retreats": ["Team Building", "Luxury Resorts", "Offsite Meetings", "Wellness Retreats"],
  };

  return (
    <>
      <header className="text-gray-400 bg-white-900 body-font z-20 relative">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-black">EasyTravel</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center">
            <Link to="/about" className="mr-5 hover:text-green-900">ABOUT US</Link>
            <Link className="mr-5 hover:text-green-900">SERVICES</Link>
            <Link to="/contact" className="mr-5 hover:text-green-900">CONTACT US</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Contact
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <header className="text-gray-400 bg-gray-900 body-font z-20 relative">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto text-l flex flex-wrap items-center text-white justify-center">
            {Object.keys(dropdownItems).map((menu) => (
              <div
                key={menu}
                className="relative mr-5"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="hover:text-white cursor-pointer">{menu}</div>
                {dropdown === menu && (
                  <div
                    className="absolute bg-gray-800 rounded shadow-lg mt-2 z-30"
                    onMouseEnter={() => handleMouseEnter(menu)} // Keep the dropdown open when hovering over it
                    onMouseLeave={handleMouseLeave} // Close the dropdown when mouse leaves the dropdown area
                  >
                    <ul className="text-gray-400">
                      {dropdownItems[menu].map((item, index) => (
                        <li key={index} className="px-4 py-2 hover:text-white">
                          <Link to={`/packages`}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
