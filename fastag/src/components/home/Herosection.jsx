import React from "react";

const HeroSection = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const vehicleNumberInput = document.getElementById("vehicle-number");
    const vehicleNumber = vehicleNumberInput.value.trim();

    if (vehicleNumber === "") {
      alert("Please enter a valid vehicle number.");
      return;
    }

    console.log("Initiating FASTag lookup for:", vehicleNumber);

    alert(`Proceeding to next step for vehicle: ${vehicleNumber}`);

    vehicleNumberInput.value = "";
  };

  return (
    <div
      className="min-h-[80vh] pt-12 md:pt-20"
      style={{
        backgroundColor: "#f9f9f9",
        backgroundImage:
          "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, #f2f2f2 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              FASTag Recharge Online at{" "}
              <span className="text-teal-600">LogicLead</span>
            </h1>

            <ul className="mt-8 space-y-4 text-lg text-gray-700">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600 mr-3 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Instant & Secure Payments
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600 mr-3 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Discounts & Cashback Offers
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600 mr-3 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                24x7 Dedicated Customer Support
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-5/12 max-w-md">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-teal-600 p-5 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                  FASTag Recharge
                </h2>
                <span className="font-semibold flex items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm-1 12v-3H6a1 1 0 110-2h3V7a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0z" />
                  </svg>
                  Bharat Connect
                </span>
              </div>

              <div className="p-6">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-6">
                    <input
                      type="text"
                      id="vehicle-number"
                      placeholder="Enter vehicle number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700 shadow-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
                  >
                    Proceed
                  </button>
                </form>

                <p className="mt-4 text-sm text-yellow-600 flex items-center justify-center font-medium">
                  <span className="mr-1 text-base">⚡</span>
                  Get the best deals on FASTag Recharge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
