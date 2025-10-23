import { useState } from "react";

export default function RechargeForm() {
  const [vehicleNumber, setVehicleNumber] = useState("");

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-lg">
      <h2 className="text-xl font-bold bg-teal-700 text-white px-4 py-3 rounded-t-lg">
        FASTag Recharge
      </h2>
      <div className="space-y-4 pt-6">
        <input
          type="text"
          placeholder="Enter vehicle number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500"
        />
        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-bold text-lg transition">
          Proceed
        </button>
        <p className="flex items-center justify-center gap-2 text-gray-700 text-sm">
          ⚡ Get best deals on FASTag Recharge
        </p>
      </div>
    </div>
  );
}
