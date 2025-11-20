import React from "react";

// 🔥 Free gym woman image (for BMI section only)
const bmiBackgroundImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85";

export default function BMI() {
  return (
    <section
      className="w-full py-16 px-6 md:px-20 relative"
      
    >
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0"
      style={{
        backgroundImage: `url(${bmiBackgroundImage})`,
        backgroundSize: "cover",
      }}
      ></div>

      {/* Centered Form Card */}
      <div className="relative max-w-7xl mx-auto flex justify-end items-center h-full">
        <div className="bg-white shadow-lg p-10 rounded-lg w-full max-w-md">
          <h2 className="text-red-600 text-3xl font-bold mb-2">CALCULATE YOUR</h2>
          <p className="text-gray-600 tracking-wide mb-6">BODY MASS INDEX</p>

          <div className="space-y-5 mt-4">
            <input
              type="text"
              placeholder="Height (cm)"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-600"
            />
            <input
              type="text"
              placeholder="Weight (kg)"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-600"
            />
            <input
              type="text"
              placeholder="Age (Years)"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-600"
            />
            <select className="w-full border border-gray-300 p-3 rounded bg-white focus:outline-none focus:border-red-600">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <button className="w-full bg-red-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition">
              CALCULATE BMI →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}