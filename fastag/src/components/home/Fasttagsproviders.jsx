import React from "react";

const bankLogos = [
  {
    name: "Indian Highways...",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/C510BAQFYegGGwVj3tA/company-logo_200_200/company-logo_200_200/0/1630603665385?e=2147483647&v=beta&t=8DMVoo11AOZYyot8uNqGEIgDPd_DAEnlSaPqN3Cp2iI",
  },
  {
    name: "IndusInd Bank",
    imgUrl:
      "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/indusind-bank-indusmobile-app-icon.png",
  },
  {
    name: "Bank of Baroda",
    imgUrl:
      "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png",
  },
  {
    name: "Axis Bank",
    imgUrl: "https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png",
  },
  {
    name: "IDFC FIRST Bank",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zAbKhIggRs8aVN2TWlP-nF38Jlm78p9KOA&s",
  },
  {
    name: "HDFC Bank",
    imgUrl:
      "https://crystalpng.com/wp-content/uploads/2025/09/hdfc-bank-logo.png",
  },

  {
    name: "Kotak Mahindra...",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6kSZ5FgDPjxU3OltKiSB5lInUwe6zzSZlQ&s",
  },
  {
    name: "Equitas",
    imgUrl:
      "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/equitas-small-finance-bank-logo-hd.png",
  },
  {
    name: "IDBI Bank",
    imgUrl:
      "https://bfsi.eletsonline.com/wp-content/uploads/2020/02/IDBI-Bank-Admit-Card-2020.jpg",
  },
  {
    name: "IOB",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_mp1wdykNjkg1nhv461ryHKBQRPKyzwNxw&s",
  },
  {
    name: "Jammu and Kashm...",
    imgUrl:
      "https://www.eqimg.com/images/2024/1920x1080/10282024-image3-equitymaster.jpg",
  },
  {
    name: "Karnataka Bank",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlNoOmyVWaojxNeF3nGZoLu_3W29pgf5xPg&s",
  },

  {
    name: "Paytm Payments...",
    imgUrl:
      "https://pbs.twimg.com/profile_images/1241781545607692289/UUQuPbwY_400x400.jpg",
  },
  {
    name: "State Bank of I...",
    imgUrl: "https://etimg.etb2bimg.com/photo/115427346.cms",
  },
  {
    name: "Federal Bank",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5RNGf241jlovYbUlNPaVli8iQiPXjs9FIw&s",
  },
  {
    name: "ICICI Bank",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8mXBusladp4eop5YLbiGOpipboZcpsGylw&s",
  },
  {
    name: "UCO Bank",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzn_EHT0l-aqWKVkepB9Yn9eRdt7vuOZI7rA&s",
  },
  {
    name: "Airtel Payments...",
    imgUrl: "https://etimg.etb2bimg.com/photo/123254359.cms",
  },
];

const FastagProviders = () => {
  return (
    <div className="py-12 bg-gray-50 font-sans">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
        FASTag Provider
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 px-4 max-w-7xl mx-auto">
        {bankLogos.map((bank) => (
          <div
            key={bank.name}
            className="flex flex-col items-center justify-between bg-white rounded-lg shadow-md p-3 h-36 
                       transition duration-300 ease-in-out hover:shadow-xl hover:ring-2 hover:ring-teal-500 cursor-pointer"
          >
            <div className="flex items-center justify-center h-full w-full overflow-hidden p-2">
              <img
                src={bank.imgUrl}
                alt={`${bank.name} Logo`}
                className="max-w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            <p className="text-xs font-medium text-gray-700 text-center flex-shrink-0 mt-1">
              {bank.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FastagProviders;
