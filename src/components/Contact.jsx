import React from "react";

export default function Contact() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT COLUMN */}
        <div>
          <p className="text-red-600 text-sm font-semibold tracking-wide mb-2">
            CONTACT US
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-2">GET IN TOUCH</h2>
          <h2 className="text-3xl font-black text-red-600">REACH OUT TO US</h2>
        </div>

        {/* RIGHT FORM COLUMN */}
        <div className="space-y-6">
          {/* NAME FIELD */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">NAME</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600"
              placeholder=""
            />
          </div>

          {/* EMAIL FIELD */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">EMAIL</label>
            <input
              type="email"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600"
              placeholder=""
            />
          </div>

          {/* MESSAGE FIELD */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">MESSAGE</label>
            <textarea
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 resize-none"
              rows={2}
              placeholder=""
            ></textarea>
          </div>

          {/* SEND BUTTON */}
          <button className="w-full bg-red-600 text-xl text-white py-6 rounded-md font-semibold hover:bg-red-700 transition">
            SEND MESSAGE    →
          </button>
        </div>
      </div>
    </section>
  );
}