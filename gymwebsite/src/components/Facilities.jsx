import React from "react";

const facilities = [
  {
    title: "CARDIO ZONE",
    img: "https://images.unsplash.com/photo-1571019613574-3b21f3c5ca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "EXERCISE STUDIO",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "WEIGHT TRAINING",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "FUNCTIONAL ZONE",
    img: "https://images.unsplash.com/photo-1554825203-78f2a7b44a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function Facilities() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
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