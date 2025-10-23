import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 pb-10">
         
          <div className="flex flex-col justify-start md:text-left text-center">
           
            <div className="text-3xl font-extrabold text-teal-400">
              Logiclead
            </div>
            
            <p className="mt-2 text-teal-200 text-sm">
              Your trusted partner for effortless FASTag recharge.
            </p>
          </div>

          
          <div className="md:text-left text-center">
            <h3 className="text-xl font-bold mb-4 text-teal-200">Reach Us</h3>

            <ul className="space-y-3 text-teal-100">
             
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 mr-3 text-teal-400" />
                <a
                  href="mailto:ops@logiclead.in"
                  className="hover:text-teal-400 transition"
                >
                  ops@logiclead.in
                </a>
              </li>

              
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 mr-3 text-teal-400" />
                <a
                  href="mailto:tech@logiclead.in"
                  className="hover:text-teal-400 transition"
                >
                  tech@logiclead.in
                </a>
              </li>

           <li className="flex items-start justify-center md:justify-start pt-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1 mr-3 text-teal-400" />
                <p className="max-w-xs md:text-left text-center">
                  Office No 15, Ground Floor, D-29, Sector 3, Noida, Gautam
                  Buddha Nagar, Uttar Pradesh, 201301.
                </p>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="border-t border-teal-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-teal-300">
          <p className="mb-4 md:mb-0">© 2025 Logiclead. All rights reserved</p>

          <div className="space-x-4">
            <a href="/terms" className="hover:text-teal-400 transition">
              Terms & Conditions
            </a>
            <a href="/privacy" className="hover:text-teal-400 transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
