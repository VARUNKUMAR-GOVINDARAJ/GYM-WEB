import React from "react";

// 🔥 Free gym woman image (for BMI section only)
const bmiBackgroundImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85";

export default function COACHE() {
    return (
        <section id="coaches" >
           <section className="pt-32 bg-cover bg-center" style={{ backgroundImage: "url('/image1.png')" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 p-6 pb-16">
          <div className="border-4 border-red-600 w-full max-w-sm mx-auto mt-30">
            <img src="/frame.png" alt="trainer" className="w-full h-130 object-cover object-bottom" />
          </div>
          <div className="mt-40">
            <h2 className="text-4xl font-bold">JOHN SNOW</h2>
            <p className="text-red-500 mt-10">BODY BUILDING COACH</p>
            <div className="mt-10 space-y-10 text-gray-300">
              <p>AGE: <span className="text-white">26</span></p>
              <p>EXPERIENCE: <span className="text-white">5 Years</span></p>
              <p>PHONE: <span className="text-white">+91 9874563210</span></p>
              <p>EMAIL: <span className="text-white">john@beast.com</span></p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-white flex justify-center items-center gap-14 py-4">
        <img src="/01.png" alt="IFPASA" className="h-20 object-contain" />
        <img src="/02.png" alt="NASM" className="h-20 object-contain" />
        <img src="/03.png" alt="ISSA" className="h-20 object-contain" />
      </div>

      {/* Introduction */}
      <section className="bg-white text-black py-12">
        <div className="max-w-5xl mx-auto p-6">
          <h3 className="text-center text-2xl font-bold text-red-600">INTRODUCTION</h3>
          <h2 className="text-center text-gray-700">READ BIOGRAPHY OF A COACH</h2>
          <p className="mt-6 text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white text-black py-12">
        <div className="max-w-6xl mx-auto p-6">
          <h3 className="text-center text-2xl font-bold text-red-600 mb-8">SKILLS</h3>
          <h2 className="text-center text-gray-700">SKILLSET OF OUR COACH</h2>

          {/* Two Column Layout */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">

            <div>
              <p className="mt-6 text-gray-700 text-justify md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="space-y-6">
              {[{ label: "BODY BUILDING", value: 92 }, { label: "CARDIO", value: 74 }, { label: "WEIGHT TRAINING", value: 83 }].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full bg-gray-300 h-3 rounded-full">
                    <div className="bg-red-600 h-3 rounded-full" style={{ width: `${skill.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-black py-12">
        {/* Large Image */}
        <div >
          <img
            src="/instagram.png"
            alt="Instagram Banner"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
        </section>
    );
}