import React from "react";

const days = [
  { date: "SUNDAY, 25TH NOV", img: "/Frame10.png", top: "CARDIO", bottom: "WEIGHT TRAINING" },
  { date: "MONDAY, 25TH NOV", img: "/Frame11.png", top: "CARDIO", bottom: "WEIGHT TRAINING" },
  { date: "TUESDAY, 25TH NOV", img: "/Frame12.png", top: "CARDIO", bottom: "PLYÓ" },
  { date: "WEDNESDAY, 27TH NOV", img: "/Frame13.png", top: "CARDIO", bottom: "CROSSFIT" },
  { date: "THURSDAY, 28TH NOV", img: "/Frame14.png", top: "BODY BUILDING", bottom: "PLYO" },
  { date: "FRIDAY, 29TH NOV", img: "/Frame15.png", top: "PLYO", bottom: "BODY BUILDING" },
  // { date: "SATURDAY, 30TH NOV", img: "/Frame16.png", top: "WEIGHT TRAINING", bottom: "CROSSFIT" },
];

export default function SchedulePage() {
  return (
    <div className="px-6 md:px-20 py-16">
      {/* ---------------- HEADER ---------------- */}
      <div className="text-center mb-12">
        <h2 className="text-red-600 text-3xl font-bold tracking-wider">SCHEDULE</h2>
        <p className="mt-2 text-gray-500">KEEP UP WITH THE SCHEDULE TO STAY FIT</p>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* ---------------- GRID ---------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* First red box */}
        <div className="bg-red-600 text-white flex flex-col justify-between p-6">
          <div>
            <p className="text-2xl font-bold">24TH – 30TH</p>
            <p className="text-xl mt-2 font-semibold">NOVEMBER 2019</p>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="text-white text-xl">&lt;</button>
            <button className="text-white text-xl">&gt;</button>
          </div>
        </div>

        {/* Days */}
        {days.map((day, i) => (
          <div key={i} className="relative text-white">
            <img
              src={day.img}
              alt="workout"
              className="w-full h-64 object-cover brightness-75 rounded"
            />
            <div className="absolute bottom-4 left-4">
              <h4 className="text-lg font-bold">{day.date}</h4>
              <p className="text-sm">{day.top}</p>
              <p className="text-sm font-semibold">{day.bottom}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- REVIEW SECTION ---------------- */}
      <div className="mt-5">
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-3xl font-bold tracking-wider">REVIEW</h2>
          <p className="text-gray-500 text-sm mt-5">READ WHAT PEOPLE SAY</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Review image */}
          <img
            src="/image 14.png"
            className="w-full rounded-lg object-cover"
            alt="person"
          />

          {/* Review text */}
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Magnis massa fringilla purus porta sed varius.
              Mauris egestas pharetra sed id eget. Vulputate malesuada purus amet turpis arcu venenatis.
            </p>

            <p className="text-xl font-semibold">Nell Francls</p>

            <div className="flex gap-4 mt-4 text-gray-500">
              <button>&larr;</button>
              <button>&rarr;</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
