import React from 'react';
import { Link } from 'react-router-dom';


const Packages = () => {
    return (
      <>
        <section className="text-white bg-gray-800 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-800 rounded overflow-hidden">
                <div className="w-24 h-full bg-green-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-white font-extrabold title-font text-5xl mb-2 sm:mb-0">
                  Global Vacation Packages
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-white sm:pl-10 pl-0">
                  Street art subway tile salvia four dollar toast bitters selfies
                  quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                  Viral gochujang bitters dreamcatcher.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain  object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/europe"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-white mt-2 ml-10">
                  Europe
                </h2>
                <p className="text-base leading-relaxed ml-10 ">
                  Starting price - 200k
                </p>
                <Link to={`/package/europe`} className="text-green-600 inline-flex items-center mt-3 ml-10">

                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/bali"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-white mt-2 ml-10">
                  Bali
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 80k
                </p>
                <Link to={`/package/bali`} className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/vietnam"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-white mt-2 ml-10">
                  Vietnam
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 100k
                </p>
                <Link to={`/package/vietnam`} className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/dubai"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-white mt-2 ml-10">
                  Duabai
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 150k
                </p>
                <Link to={`/package/dubai`} className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="text-black  body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-800 rounded overflow-hidden">
                <div className="w-24 h-full bg-green-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-black font-extrabold title-font text-5xl mb-2 sm:mb-0">
                  Indian Packages
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-black sm:pl-10 pl-0">
                  Street art subway tile salvia four dollar toast bitters selfies
                  quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                  Viral gochujang bitters dreamcatcher.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/Explore%20India/ladakh"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-black mt-2 ml-10">
                  Ladakh
                </h2>
                <p className="text-base leading-relaxed ml-10 ">
                  Starting price - 30k
                </p>
                <Link to={`/package/ladakh`} className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/Explore%20India/kashmir"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-black mt-2 ml-10">
                  Kashmir
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 80k
                </p>
                <Link to={`/package/kashmir`} className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/Explore%20India/sikkim"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-black mt-2 ml-10">
                Sikkim
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 100k
                </p>
                <Link to={`/package/sikkim`} className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/Explore%20India/meghalaya"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-black mt-2 ml-10">
                Meghalaya
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 150k
                </p>
                <Link to={`/package/meghalya`} className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white bg-gray-800 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-800 rounded overflow-hidden">
                <div className="w-24 h-full bg-green-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-white font-extrabold title-font text-5xl mb-2 sm:mb-0">
                  Bike Trips
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-white sm:pl-10 pl-0">
                  Street art subway tile salvia four dollar toast bitters selfies
                  quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                  Viral gochujang bitters dreamcatcher.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/europe"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-white mt-2 ml-10">
                  Europe
                </h2>
                <p className="text-base leading-relaxed ml-10 ">
                  Starting price - 200k
                </p>
                <Link to="/package" className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/bali"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-white mt-2 ml-10">
                  Manali
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 80k
                </p>
                <Link to={`/package/manali`} className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/vietnam"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-white mt-2 ml-10">
                  Vietnam
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 100k
                </p>
                <Link to="/package" className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/dubai"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-white mt-2 ml-10">
                  Duabi
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 150k
                </p>
                <Link to="/package" className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="text-black  body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-800 rounded overflow-hidden">
                <div className="w-24 h-full bg-green-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-black font-extrabold title-font text-5xl mb-2 sm:mb-0">
                  Honeymoon Packages
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-black sm:pl-10 pl-0">
                  Street art subway tile salvia four dollar toast bitters selfies
                  quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                  Viral gochujang bitters dreamcatcher.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/europe"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-black mt-2 ml-10">
                  Europe
                </h2>
                <p className="text-base leading-relaxed ml-10 ">
                  Starting price - 200k
                </p>
                <Link to="/package" className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/bali"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-black mt-2 ml-10">
                  Bali
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 80k
                </p>
                <Link to="/package" className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/vietnam"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-black mt-2 ml-10">
                  Vietnam
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 100k
                </p>
                <Link to="/package" className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-contain object-center h-full w-full"
                    src="https://images.wanderon.in/new-homepage-data/International/dubai"
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-black mt-2 ml-10">
                  Duabi
                </h2>
                <p className="text-base leading-relaxed ml-10">
                  Starting price - 150k
                </p>
                <Link to="/package" className="text-green-600 inline-flex items-center mt-3 ml-10">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Packages;
  
