
import React from "react";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./Pages/Home.jsx";
import InstallPrompt from "./components/installprompt.jsx";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      
      <InstallPrompt />
      <Navbar />

      
      <main className="flex-grow">
        <Home />
      </main>

     
      <Footer />
    </div>
  );
}
