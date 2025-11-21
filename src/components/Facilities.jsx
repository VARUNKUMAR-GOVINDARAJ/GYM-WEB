import React from "react";

const facilities = [
  {
    title: "CARDIO ZONE",
    img: "/Frame9.png",
  },
  {
    title: "EXERCISE STUDIO",
    img: "/Frame6.png",
  },
  {
    title: "WEIGHT TRAINING",
    img: "/Frame7.png",
  },
  {
    title: "FUNCTIONAL ZONE",
    img: "/Frame8.png",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="w-full bg-white py-32 px-6 md:px-20">
      {/* ✅ ALL CONTENT CENTERED */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-red-600 text-3xl font-bold mb-2">FACILITIES</h2>
        <p className="text-gray-600 tracking-wide mb-6">HOW IT FEELS TO BE WITH US</p>
        <p className="text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* ✅ GRID CENTERED */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {facilities.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3">
              <h3 className="text-white text-xl font-bold drop-shadow-md">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}