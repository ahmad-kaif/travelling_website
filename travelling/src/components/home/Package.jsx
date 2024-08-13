import React from "react";
import { useParams } from "react-router-dom";

const Package = () => {
  const { id } = useParams();

  // You can map id to specific package details, or retrieve it dynamically
  //international packages
  const packageDetails = {
    // International Packages
    almaty: {
      title: "Almaty",
      description: "Explore the vibrant culture and stunning landscapes of Almaty...",
      price: "100k",
      image: "../../../public/internationalPackagePics/almaty.jpg",
    },
    bali: {
      title: "Bali",
      description: "Enjoy the tropical paradise with pristine beaches and vibrant culture...",
      price: "80k",
      image: "../../../public/internationalPackagePics/bali.jpg",
    },
    baku: {
      title: "Baku",
      description: "Experience the rich history and modern charm of Baku...",
      price: "110k",
      image: "../../../public/internationalPackagePics/baku.jpg",
    },
    europe: {
      title: "Europe",
      description: "Discover the rich history and stunning landscapes of Europe...",
      price: "200k",
      image: "../../../public/internationalPackagePics/europe.jpg",
    },
    bhutan: {
      title: "Bhutan",
      description: "Immerse yourself in the serene landscapes and culture of Bhutan...",
      price: "130k",
      image: "../../../public/internationalPackagePics/bhutan.jpg",
    },
    thailand: {
      title: "Thailand",
      description: "Experience the vibrant culture and beautiful beaches of Thailand...",
      price: "90k",
      image: "../../../public/internationalPackagePics/thailand.jpg",
    },
    dubai: {
      title: "Dubai",
      description: "Enjoy the luxury and modernity of Dubai...",
      price: "180k",
      image: "../../../public/internationalPackagePics/dubai.jpg",
    },
    turkey: {
      title: "Turkey",
      description: "Explore the diverse history and landscapes of Turkey...",
      price: "120k",
      image: "../../../public/internationalPackagePics/turkey.jpg",
    },
    srilanka: {
      title: "Sri Lanka",
      description: "Discover the beauty and culture of Sri Lanka...",
      price: "90k",
      image: "../../../public/internationalPackagePics/srilanka.jpg",
    },
    maldives: {
      title: "Maldives",
      description: "Relax in the tropical paradise of the Maldives...",
      price: "150k",
      image: "../../../public/internationalPackagePics/maldives.jpg",
    },
    singapore: {
      title: "Singapore",
      description: "Experience the modern marvels and vibrant culture of Singapore...",
      price: "110k",
      image: "../../../public/internationalPackagePics/singapore.jpg",
    },
    malaysia: {
      title: "Malaysia",
      description: "Enjoy the tropical beauty and cultural diversity of Malaysia...",
      price: "100k",
      image: "../../../public/internationalPackagePics/malaysia.jpg",
    },
    mauritius: {
      title: "Mauritius",
      description: "Discover the beautiful beaches and culture of Mauritius...",
      price: "120k",
      image: "../../../public/internationalPackagePics/mauritius.jpg",
    },
  
    // Indian Packages
    ladakh: {
      title: "Ladakh",
      description: "Explore the stunning landscapes and unique culture of Ladakh...",
      price: "90k",
      image: "../../../public/indianPackagePics/ladakh.jpg",
    },
    kashmir: {
      title: "Kashmir",
      description: "Experience the serene beauty and rich culture of Kashmir...",
      price: "70k",
      image: "../../../public/indianPackagePics/kashmir.jpg",
    },
    andaman: {
      title: "Andaman",
      description: "Relax on the pristine beaches and explore the beauty of Andaman...",
      price: "110k",
      image: "../../../public/indianPackagePics/andaman.jpg",
    },
    meghalaya: {
      title: "Meghalaya",
      description: "Discover the lush landscapes and unique culture of Meghalaya...",
      price: "50k",
      image: "../../../public/indianPackagePics/meghalaya.jpg",
    },
    spiti: {
      title: "Spiti Valley",
      description: "Experience the rugged beauty and cultural richness of Spiti Valley...",
      price: "80k",
      image: "../../../public/indianPackagePics/spiti.jpg",
    },
    kerala: {
      title: "Kerala",
      description: "Relax in the tranquil backwaters and lush landscapes of Kerala...",
      price: "90k",
      image: "../../../public/indianPackagePics/kerala.jpg",
    },
    himachalPradesh: {
      title: "HimachalPradesh",
      description: "Explore the scenic beauty and adventure opportunities in Himachal Pradesh...",
      price: "80k",
      image: "../../../public/indianPackagePics/himachalPradesh.jpg",
    },
    sikkim: {
      title: "Sikkim",
      description: "Discover the breathtaking landscapes and rich culture of Sikkim...",
      price: "80k",
      image: "../../../public/indianPackagePics/sikkim.jpg",
    },
    uttarakhand: {
      title: "Uttarakhand",
      description: "Enjoy the natural beauty and spiritual experiences of Uttarakhand...",
      price: "70k",
      image: "../../../public/indianPackagePics/uttarakhand.jpg",
    },
    rajasthan: {
      title: "Rajasthan",
      description: "Immerse yourself in the rich history and vibrant culture of Rajasthan...",
      price: "90k",
      image: "../../../public/indianPackagePics/rajasthan.jpg",
    },
    manali: {
      title: "Manali",
      description: "Experience the adventure and scenic beauty of Manali...",
      price: "50k",
      image: "../../../public/indianPackagePics/manali.jpg",
    },
  
    // Bike Trips
    ladakh: {
      title: "Leh-Ladakh",
      description: "Embark on an exhilarating bike trip through the stunning landscapes of Leh-Ladakh...",
      price: "100k",
      image: "../../../public/bikeTripsPics/leh-ladakh.jpg",
    },
    manaliTsomoririLehSrinagar: {
      title: "Manali-Tsomoriri-Leh-Srinagar",
      description: "Enjoy an adventurous ride from Manali to Srinagar, covering Tsomoriri and Leh...",
      price: "120k",
      image: "../../../public/bikeTripsPics/manali-tsomoriri-leh-srinagar.jpg",
    },
    srinagarLehTsoMoririManali: {
      title: "Srinagar-Leh-Tso Moriri-Manali",
      description: "Experience the thrilling bike ride from Srinagar to Manali via Leh and Tso Moriri...",
      price: "130k",
      image: "../../../public/bikeTripsPics/srinagar-leh-tso-moriri-manali.jpg",
    },
    lehToLehUmlingLa: {
      title: "Leh to Leh with Umling La",
      description: "Challenge yourself with a bike trip through Umling La, the highest motorable pass...",
      price: "140k",
      image: "../../../public/bikeTripsPics/leh-to-leh-umling-la.jpg",
    },
    spitiValley: {
      title: "Spiti Valley",
      description: "Explore the rugged terrains and unique culture of Spiti Valley on a bike...",
      price: "100k",
      image: "../../../public/bikeTripsPics/spiti-valley.jpg",
    },
    spitiValleyGroupTrip: {
      title: "Spiti Valley Group Trip",
      description: "Join a group for an unforgettable bike adventure through Spiti Valley...",
      price: "110k",
      image: "../../../public/bikeTripsPics/spiti-valley-group-trip.jpg",
    },
    winterSpiti: {
      title: "Winter Spiti",
      description: "Experience the beauty of Spiti Valley in the winter season with a thrilling bike ride...",
      price: "120k",
      image: "../../../public/bikeTripsPics/winter-spiti.jpg",
    },
  
    // Honeymoon Packages
    bali: {
      title: "Bali",
      description: "Enjoy a romantic escape in the tropical paradise of Bali...",
      price: "80k",
      image: "../../../public/honeymoonPackagePics/bali.jpg",
    },
    vietnam: {
      title: "Vietnam",
      description: "Experience a romantic getaway in the beautiful landscapes of Vietnam...",
      price: "90k",
      image: "../../../public/honeymoonPackagePics/vietnam.jpg",
    },
    singapore: {
      title: "Singapore",
      description: "Discover the modern marvels and romance of Singapore...",
      price: "110k",
      image: "../../../public/honeymoonPackagePics/singapore.jpg",
    },
    thailand: {
      title: "Thailand",
      description: "Enjoy a romantic vacation in the beautiful beaches and vibrant culture of Thailand...",
      price: "100k",
      image: "../../../public/honeymoonPackagePics/thailand.jpg",
    },
    kashmir: {
      title: "Kashmir",
      description: "Experience a serene and romantic escape in the stunning landscapes of Kashmir...",
      price: "70k",
      image: "../../../public/honeymoonPackagePics/kashmir.jpg",
    },
    maldives: {
      title: "Maldives",
      description: "Relax in the tropical paradise of the Maldives for a perfect honeymoon...",
      price: "150k",
      image: "../../../public/honeymoonPackagePics/maldives.jpg",
    },
    andaman: {
      title: "Andaman",
      description: "Enjoy a romantic retreat on the beautiful beaches of the Andaman Islands...",
      price: "120k",
      image: "../../../public/honeymoonPackagePics/andaman.jpg",
    },
    kerala: {
      title: "Kerala",
      description: "Experience the tranquil backwaters and lush landscapes of Kerala for your honeymoon...",
      price: "90k",
      image: "../../../public/honeymoonPackagePics/kerala.jpg",
    },
  
    // Community Trips
    communitySpitiValleyGroupTrips: {
      title: "Spiti Valley Group Trips",
      description: "Join a community group for an adventurous trip through Spiti Valley...",
      price: "110k",
      image: "../../../public/communityTripsPics/spiti-valley-group-trips.jpg",
    },
    communityMeghalayaGroupTour: {
      title: "Meghalaya Group Tour",
      description: "Explore the beauty of Meghalaya with a group of fellow travelers...",
      price: "60k",
      image: "../../../public/communityTripsPics/meghalaya-group-tour.jpg",
    },
    communityBaliGroupTour: {
      title: "Bali Group Tour",
      description: "Enjoy a group tour in the tropical paradise of Bali...",
      price: "90k",
      image: "../../../public/communityTripsPics/bali-group-tour.jpg",
    },
    communityDubaiGroupTour: {
      title: "Dubai Group Tour",
      description: "Experience the luxury of Dubai with a group of travelers...",
      price: "180k",
      image: "../../../public/communityTripsPics/dubai-group-tour.jpg",
    },
    communityThailandGroupTour: {
      title: "Thailand Group Tour",
      description: "Explore the vibrant culture and beautiful beaches of Thailand with a group...",
      price: "100k",
      image: "../../../public/communityTripsPics/thailand-group-tour.jpg",
    },
    andaman: {
      title: "Andaman",
      description: "Join a community group to explore the stunning beaches and islands of Andaman...",
      price: "110k",
      image: "../../../public/communityTripsPics/andaman.jpg",
    },
    rajasthan: {
      title: "Rajasthan",
      description: "Experience the rich history and culture of Rajasthan with a community tour...",
      price: "90k",
      image: "../../../public/communityTripsPics/rajasthan.jpg",
    },
    kerala: {
      title: "Kerala",
      description: "Discover the beauty of Kerala with a group of fellow travelers...",
      price: "90k",
      image: "../../../public/communityTripsPics/kerala.jpg",
    },
    himachalPradesh: {
      title: "Himachal Pradesh",
      description: "Explore the scenic beauty and adventure opportunities of Himachal Pradesh with a group...",
      price: "80k",
      image: "../../../public/communityTripsPics/himachal-pradesh.jpg",
    },
    sikkim: {
      title: "Sikkim",
      description: "Join a community tour to explore the breathtaking landscapes and culture of Sikkim...",
      price: "80k",
      image: "../../../public/communityTripsPics/sikkim.jpg",
    },
  };
  

  const selectedPackage = packageDetails[id];

  return (
    <div className="container mx-auto bg-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-5">
        {selectedPackage.title}
      </h1>
      <img
        src={selectedPackage.image}
        alt={selectedPackage.title}
        className="w-full h-96 object-cover rounded-lg mb-5 shadow-md"
      />
      <p className="text-center text-lg text-gray-600 mb-4">
        {selectedPackage.description}
      </p>
      <p className="text-2xl text-center font-semibold text-green-600 mb-5">
        Starting price - {selectedPackage.price}
      </p>
      <p className="text-lg text-center text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est reiciendis
        quasi, veniam nesciunt quod maiores, perferendis ipsa facilis blanditiis
        enim doloribus numquam! Amet optio modi quo, quos perspiciatis possimus
        praesentium.
      </p>
    </div>
  );
};

export default Package;
