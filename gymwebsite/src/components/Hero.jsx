import React from "react";

// 🔥 Free gym hero image from Unsplash
const heroImg = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85";

export default function Hero() {
  return (
    <div id="home" className="w-full h-[520px] relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(Hero.png)` }}
      ></div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-black/60">
        <div className="flex items-center gap-2">
          {/* Optional: Use same image as logo (or use text only) */}
          <span className="text-white font-semibold text-lg">BEAST</span>
        </div>
        <button className="bg-red-600 text-white text-sm px-4 py-2 rounded-md">
          JOIN NOW
        </button>
      </div>

      {/* Middle Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
        <p className="text-red-500 font-semibold mb-1">CARDIO</p>

        <h1 className="text-white font-extrabold text-6xl leading-tight drop-shadow-md">
          LIVE IT <br /> LIKE A ROCK!
        </h1>

        {/* LEFT SIDE BUTTON (kept in same position) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
          {/* <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div> */}
          <p className="text-white text-xs rotate-90 mt-2 tracking-widest">
            PLAY VIDEO
          </p>
        </div>
      </div>


    </div>
  );
}