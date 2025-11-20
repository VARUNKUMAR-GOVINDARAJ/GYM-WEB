import React from "react";

// 🔥 Free gym-related image from Unsplash (man measuring waist – relevant to BMI)
const bmiImage = "https://images.unsplash.com/photo-1559429327-f94b477e3f8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85";

export default function BMI() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full">
          <img
            src={bmiImage}
            alt="Man measuring waist for BMI"
            className="w-full h-[600px] object-cover rounded-lg"
          />
          {/* Red decorative shape */}
          <div className="absolute top-0 left-0 w-64 h-96 bg-red-600 opacity-90 -z-10 -translate-x-10 -translate-y-10 rotate-6"></div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="bg-[#f3f3f3] shadow-lg p-10 rounded-lg w-full">
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