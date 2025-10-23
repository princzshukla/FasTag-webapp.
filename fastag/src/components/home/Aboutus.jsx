import React from "react";

export default function AboutUs() {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="md:pr-10">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              About Us
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Welcome to <strong>Logiclead</strong>, your trusted platform for
              FASTag recharge. We make it easy for vehicle owners to recharge
              their FASTag quickly and securely from anywhere.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our goal is to save your time at toll plazas by providing a smooth
              recharge experience with 24×7 customer support, instant recharge
              confirmations, and exciting cashback offers.
            </p>

            <div className="mt-6">
              <button className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl transition duration-300 ease-in-out shadow-lg transform hover:scale-[1.02]">
                Know More →
              </button>
            </div>
          </div>

          <div className="mt-10 md:mt-0 relative flex justify-center">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-sm md:max-w-full">
              <img
                src="https://c.ndtvimg.com/2025-02/mactc8ig_fastag_625x300_17_February_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738https://placehold.co/600x400/10B981/ffffff?text=FASTag+Recharge+Visual"
                alt="FASTag Recharge Card"
                className="w-full h-auto object-cover rounded-xl"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
