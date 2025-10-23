import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is FASTag?",
    answer:
      "FASTag is an electronic toll collection system in India, operated by the National Highway Authority of India (NHAI). It employs Radio Frequency Identification (RFID) technology for making toll payments directly from the prepaid or savings account linked to it.",
  },
  {
    question: "How can I recharge my FASTag on Logiclead?",
    answer:
      "You can recharge your FASTag through our user-friendly interface using your vehicle registration number. We support various channels, including bank portals and mobile payment apps.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major payment methods, including credit cards, debit cards, Net Banking, and popular UPI apps to ensure a seamless recharge experience.",
  },
  {
    question: "Is there any minimum recharge amount?",
    answer:
      "Yes, the minimum recharge amount typically varies between ₹100 and ₹150, depending on the issuing bank or provider.",
  },
  {
    question: "How long does it take for the recharge to reflect?",
    answer:
      "Recharges are usually processed instantly, and the amount is reflected in your FASTag account within a few minutes.",
  },
  {
    question: "Is this important",
    answer:
      "Yes, carrying a functional FASTag is now mandatory for all four-wheeled vehicles passing through electronic toll plazas across India.",
  },
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-md mb-4 overflow-hidden 
                 transition duration-300 ease-in-out hover:shadow-lg hover:ring-1 hover:ring-teal-500/50"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-left font-semibold text-lg text-gray-800 hover:text-teal-700 transition"
      >
        <span>{faq.question}</span>

        {isOpen ? (
          <Minus className="w-5 h-5 text-teal-700 transition-transform duration-300" />
        ) : (
          <Plus className="w-5 h-5 text-teal-700 transition-transform duration-300" />
        )}
      </button>

      <div
        style={{
          maxHeight: isOpen ? "500px" : "0", 
          opacity: isOpen ? 1 : 0,
        }}
        className={`px-5 pb-5 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <>
      <section className="w-full bg-gray-50 py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>
      <div>
        <img
          src="https://loconav.com/vahan/wp-content/uploads/2020/12/fast-tag-banner.jpg"
          alt=""
          srcset=""
        />
      </div>
    </>
  );
}
