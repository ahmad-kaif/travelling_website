import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { faPhone } from "@fortawesome/free-solid-svg-icons"; 

export default function Header() {
  const [dropdown, setDropdown] = useState(null);

  let timeoutId;

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutId);
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdown(null);
    }, 300);
  };

  const dropdownItems = {
    "Global Vacation Packages": [
      { name: "Almaty", route: "/package/almaty" },
      { name: "Bali", route: "/package/bali" },
      { name: "Baku", route: "/package/baku" },
      { name: "Europe", route: "/package/europe" },
      { name: "Bhutan", route: "/package/bhutan" },
      { name: "Thailand", route: "/package/thailand" },
      { name: "Dubai", route: "/package/dubai" },
      { name: "Turkey", route: "/package/turkey" },
      { name: "Srilanka", route: "/package/srilanka" },
      { name: "Maldives", route: "/package/maldives" },
      { name: "Singapore", route: "/package/singapore" },
      { name: "Malaysia", route: "/package/malaysia" },
      { name: "Mauritius", route: "/package/mauritius" },
    ],
    "India Trip Bundles": [
      { name: "Ladakh", route: "/package/ladakh" },
      { name: "Kashmir", route: "/package/kashmir" },
      { name: "Andaman & Nicobar Island", route: "/package/andaman" },
      { name: "Meghalaya", route: "/package/meghalaya" },
      { name: "Spiti", route: "/package/spiti" },
      { name: "Kerala", route: "/package/kerala" },
      { name: "Himachal Pradesh", route: "/package/himachalPradesh" },
      { name: "Sikkim", route: "/package/sikkim" },
      { name: "Uttarakhand", route: "/package/uttarakhand" },
      { name: "Rajasthan", route: "/package/rajasthan" },
    ],
    "Bike Trips": [
      { name: "Leh-Ladakh", route: "/package/ladakh" },
      {
        name: "Manali-Tsomoriri-Leh-Srinagar",
        route: "/package/manaliTsomoririLehSrinagar",
      },
      {
        name: "Srinagar-Leh-Tso Moriri-Manali",
        route: "/package/srinagarLehTsoMoririManali",
      },
      {
        name: "Leh to Leh with Umling La",
        route: "/package/lehToLehUmlingLa",
      },
      { name: "Spiti Valley", route: "/package/spitiValley" },
      {
        name: "Spiti Valley Group Trip",
        route: "/package/spitiValleyGroupTrip",
      },
      { name: "Winter Spiti", route: "/package/winterSpiti" },
    ],
    "Honeymoon Packages": [
      { name: "Bali", route: "/package/bali" },
      { name: "Vietnam", route: "/package/vietnam" },
      { name: "Singapore", route: "/package/singapore" },
      { name: "Thailand", route: "/package/thailand" },
      { name: "Kashmir", route: "/package/kashmir" },
      { name: "Maldives", route: "/package/maldives" },
      { name: "Andaman", route: "/package/andaman" },
      { name: "Kerala", route: "/package/kerala" },
    ],
    "Community Trips": [
      { name: "Spiti Valley Group trips", route: "/package/communitySpitiValleyGroupTrips" },
      { name: "Meghalaya Group Tour", route: "/package/communityMeghalayaGroupTour" },
      { name: "Bali Group Tour", route: "/package/communityBaliGroupTour" },
      { name: "Dubai Group Tour", route: "/package/communityDubaiGroupTour" },
      { name: "Thailand Group Tour", route: "/package/communityThailandGroupTour" },
      { name: "Andaman", route: "/package/andaman" },
      { name: "Rajasthan", route: "/package/rajasthan" },
      { name: "Kerala", route: "/package/kerala" },
      { name: "Himachal Pradesh", route: "/package/himachalPradesh" },
      { name: "Sikkim", route: "/package/sikkim" },
    ],
    "Corporate Retreats": [
      { name: "Spiti Valley Group trips", route: "/package/spiti-valley" },
      // Add more items with their respective routes
    ],
  };

  const whatsappNumber = "+919899471084"; // WhatsApp number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
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
            <span className="ml-3 text-xl text-black">EasyAway Travel</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center">
            <Link
              to="/"
              className="mr-5 hover:text-green-900 transition-colors duration-300 relative group"
            >
              HOME
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              to="/about"
              className="mr-5 hover:text-green-900 transition-colors duration-300 relative group"
            >
              ABOUT US
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              to="/packages"
              className="mr-5 hover:text-green-900 transition-colors duration-300 relative group"
            >
              SERVICES
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              to="/contact"
              className="mr-5 hover:text-green-900 transition-colors duration-300 relative group"
            >
              CONTACT US
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </nav>
          <div className="flex items-center">
            <a
              href="https://wa.me/919899471084"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-2xl mr-3"
            >
              <FontAwesomeIcon
              className="mr-2 w-10"
                onClick={handleWhatsAppClick}
              icon={faWhatsapp} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +91 9899471084
            </Link>
          </div>
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
                          <Link to={item.route}>{item.name}</Link>
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
      <hr />
    </>
  );
}
