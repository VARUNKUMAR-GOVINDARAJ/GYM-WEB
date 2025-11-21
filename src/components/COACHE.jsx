import React from "react";

// 🔥 Free gym woman image (for BMI section only)
const bmiBackgroundImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85";

export default function COACHES() {
  return (
    <section id="coache" className="bg-[#1A1F24] py-32 text-white mt-20">
        <h2 className="text-center text-3xl font-bold text-red-600 mt-10">COACHES</h2>
        <p className="text-center text-sm text-gray-400 mt-5">OUR TRAINING FORCE</p>

        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          <img src="/06.png" className="w-full h-[320px] object-cover" alt="coach" />
          <img src="/frame.png" className="w-full h-[320px] object-cover" alt="coach" />
          <img src="/05.png" className="w-full h-[320px] object-cover" alt="coach" />
          <img src="/04.png" className="w-full h-[320px] object-cover" alt="coach" />
        </div>
      </section>
  );
}