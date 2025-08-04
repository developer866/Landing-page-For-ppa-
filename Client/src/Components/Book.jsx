import React from "react";

function Book() {
  return (
    <section className="py-16 px-6 md:px-16  bg-white flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Side - Steps */}
      <div className="md:w-1/2">
        <p className="text-orange-400 text-sm font-medium">Easy and Fast</p>
        <h2 className="text-3xl font-bold mt-2 mb-6">
          Book your next trip <br /> in 3 easy steps
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <img src="/destination-icon.png" alt="" className="w-10 h-10" />
            <div>
              <h3 className="font-bold text-lg">Choose Destination</h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="/payment-icon.png" alt="" className="w-10 h-10" />
            <div>
              <h3 className="font-bold text-lg">Make Payment</h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="/airport-icon.png" alt="" className="w-10 h-10" />
            <div>
              <h3 className="font-bold text-lg">Reach Airport on Selected Date</h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Trip Card */}
      <div className="md:w-[50%] bg-white rounded-2xl shadow-xl p-6 max-w-sm">
        <img src="/martin-sanchez-kaHZ4lS3eqs-unsplash.jpg"  alt="Trip to Greece" className="rounded-xl w-full  object-cover mb-4" />
        <h3 className="font-semibold text-lg mb-1">Trip To Greece</h3>
        <p className="text-gray-500 text-sm mb-2">14-29 June | by Robbin Joseph</p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-orange-400 font-medium">Ongoing</p>
          <p className="text-sm text-gray-500">40% completed</p>
        </div>

        <div className="mt-2 text-sm text-gray-600">24 people going</div>
      </div>
    </section>
  );
}

export default Book;
