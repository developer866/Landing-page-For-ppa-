import React from "react";

function Footer() {
  return (
    <footer className="sm:text-center bg-white py-16 px-6 md:px-20 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand Info */}
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Jadoo.</h1>
          <p className="text-sm">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-bold text-lg mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">More</h2>
          <ul className="space-y-2 text-sm">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center  text-xs text-gray-500 mt-12">
        All rights reserved © jadoo.co
      </div>
    </footer>
  );
}

export default Footer;
