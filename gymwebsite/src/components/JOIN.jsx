import React from "react";

// 🔥 Free gym woman image (for BMI section only)
const bmiBackgroundImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85";

export default function JOIN() {
  return (
    <section id="join" className="bg-white py-32 mt-10">
        {/* JOIN NOW */}
        <h2 className="text-center text-3xl font-bold text-red-600">JOIN NOW</h2>
        <p className="text-center text-sm text-gray-500 tracking-wide mt-5">JOIN & BE ONE OF US</p>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 border border-gray-300">

          {/* BASIC */}
          <div className="border border-gray-300 flex flex-col text-center h-full">

            {/* TOP CONTENT */}
            <div className="flex-1 flex flex-col items-center px-6 py-10">
              <h3 className="text-red-600 font-bold text-xl mb-6">BASIC</h3>

              <div className="text-4xl mb-6">🏋️</div>

              <ul className="text-sm text-gray-700 space-y-2">
                <li>PERSONAL TRAINER</li>
                <li>SERVICE LOCKER ROOMS</li>
                <li>FITNESS ASSESSMENT</li>
                <li>MORNING SLOT</li>
              </ul>

              <p className="text-red-600 text-lg font-bold mt-6">$ 9.99 / MONTH</p>
            </div>

            {/* BOTTOM BUTTON */}
            <button className="bg-red-600 text-white w-full py-6 font-semibold tracking-wide">
              ENROLL NOW →
            </button>

          </div>

          {/* PREMIUM */}
          <div className="border border-gray-300 flex flex-col text-center h-full">

            {/* TOP CONTENT */}
            <div className="flex-1 flex flex-col items-center px-6 py-10">
              <h3 className="text-red-600 font-bold text-xl mb-6">PREMIUM</h3>

              <div className="text-4xl mb-6">🏋️</div>

              <ul className="text-sm text-gray-700 space-y-2">
                <li>PERSONAL TRAINER</li>
                <li>SERVICE LOCKER ROOMS</li>
                <li>FITNESS ASSESSMENT / CONSULTATION</li>
                <li>MORNING & EVENING SLOT</li>
              </ul>

              <p className="text-red-600 text-lg font-bold mt-6">$ 24.99 / MONTH</p>
            </div>

          </div>

          {/* ADVANCED */}
          <div className="border border-gray-300 flex flex-col text-center h-full">

            {/* TOP CONTENT */}
            <div className="flex-1 flex flex-col items-center px-6 py-10">
              <h3 className="text-red-600 font-bold text-xl mb-6">ADVANCED</h3>

              <div className="text-4xl mb-6">🏋️</div>

              <ul className="text-sm text-gray-700 space-y-2">
                <li>PERSONAL TRAINER</li>
                <li>SERVICE LOCKER ROOMS</li>
                <li>FITNESS ASSESSMENT</li>
                <li>MORNING SLOT</li>
              </ul>

              <p className="text-red-600 text-lg font-bold mt-6">$ 14.99 / MONTH</p>
            </div>

          </div>
        </div>
      </section>
  );
}