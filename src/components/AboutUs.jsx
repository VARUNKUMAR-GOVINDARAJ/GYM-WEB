import React from "react";

// 🔥 Free gym image from Unsplash (woman doing resistance training)
const aboutImage = "https://images.unsplash.com/photo-1534438327276-14e53467d038?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85";

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="text-red-600 text-3xl font-bold mb-2">ABOUT US</h2>
        <p className="text-gray-600 tracking-wide mb-6">KNOW MORE TO BE MORE WITH US</p>

        <p className="text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Non faucibus ut turpis magna
          suscipit. Lorem ipsum dolor sit amet consectetur ultrices mauris lacus.
          Vel sed eget nulla sit et. Vitae aliquet sem accumsan magna tempor et
          adipiscing aliquet arcu. Mauris nec mauris dignissim morbi. Donic
          aliquam mi eu pretium tortor enim nunc nec rhoncus. Urna a eu nibh mi
          malesuada. Eget curabitur bibendum semper non eget. Nibh faucibus eget
          fermentum nibh mauris. Turpis eget in morbi nec. Sit at luctus varius
          tristique magna pulvinar. Semper scelerisque fringilla et ornare cum
          nibh scelerisque. Vitae pharetra vitae in proin. Odio id arcu egestas
          eget imperdiet enim amet massa nulla.
        </p>
      </div>

      {/* Right Image with Skewed Red Accent */}
      <div className="md:w-1/2 flex justify-center relative">
        {/* Skewed red background */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-3/4 h-full bg-red-600 -skew-x-12 opacity-80"></div>
        </div>
        {/* Real gym image from Unsplash */}
        <img
          src="image2.png"
          alt="Fitness Woman"
          className="relative z-10 max-w-md w-full object-contain"
        />
      </div>
    </section>
  );
}