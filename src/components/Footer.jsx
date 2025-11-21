import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 md:px-20">
      {/* Top Row: Logo + Newsletter */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          {/* Placeholder for Beast Logo (replace with actual SVG or img) */}
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="font-bold text-xl">BEAST</span>
        </div>

        {/* CENTER: Newsletter */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <p className="text-sm whitespace-nowrap">SUBSCRIBE TO OUR NEWSLETTER</p>
          <div className="flex w-full sm:w-64">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-gray-800 border-none p-3 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-gray-700 px-4 flex items-center justify-center">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l8 8-8 8"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm">
        {/* LEFT: Copyright */}
        <p>© Beast 2019 All Rights reserved.</p>

        {/* CENTER: Links */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-red-400">TERMS & CONDITIONS</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-red-400">PRIVACY POLICY</a>
        </div>

        {/* RIGHT: Social Icons */}
        <div className="flex gap-4">
          {[
            { name: "Facebook", icon: "F" },
            { name: "X", icon: "X" },
            { name: "Instagram", icon: "IG" },
            { name: "LinkedIn", icon: "in" },
          ].map((social, index) => (
            <a
              key={index}
              href="#"
              className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded hover:bg-gray-700 transition"
              aria-label={social.name}
            >
              <span className="text-xs">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}