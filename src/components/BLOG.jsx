import React from "react";

// 🔥 Free gym woman image (for BMI section only)
const bmiBackgroundImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85";

export default function BLOG() {
  return (
    <section id="blog" className="py-32 bg-white mt-10">
      {/* BLOG TITLE */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-red-600">BLOG</h3>
        <p className="text-gray-500 mt-2">READ TO STAY IN SHAPE</p>
      </div>

      {/* BLOG CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* CARD 1 */}
        <div>
          <div className="relative">
            <img
              src="/Frame1.png"
              className="w-full h-64 object-cover"
              alt="blog"
            />
            <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs font-bold">
              22 NOV
            </span>
          </div>
          <h4 className="mt-4 font-semibold text-gray-800">
            Build yourself in hours of exercise everyday for 6 months.
          </h4>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        {/* CARD 2 */}
        <div>
          <div className="relative">
            <img
              src="/Frame2.png"
              className="w-full h-64 object-cover"
              alt="blog"
            />
            <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs font-bold">
              22 NOV
            </span>
          </div>
          <h4 className="mt-4 font-semibold text-gray-800">
            Fat burning cardio workout to keep yourself in shape
          </h4>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        {/* CARD 3 */}
        <div>
          <div className="relative">
            <img
              src="/Frame3.png"
              className="w-full h-64 object-cover"
              alt="blog"
            />
            <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs font-bold">
              22 NOV
            </span>
          </div>
          <h4 className="mt-4 font-semibold text-gray-800">
            Crossfit Guide for beginners: 10 things you must know
          </h4>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

      </div>
    </section>
  );
}