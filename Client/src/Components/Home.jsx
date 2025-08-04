import React from "react";

function Home() {
  return (
    <main className="h-[100vh] w-full md:px-10 px-4 flex flex-col md:flex-row items-center justify-between mt-10" id='Home'>
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center md:px-10 px-4">
        <p className="text-[#DF6951] font-extrabold text-lg md:text-xl mb-5">
          BEST DESTINATION AROUND THE WORLD
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-5">
          Travel, <span className="text-yellow-500">Enjoy</span> and live a new and full life
        </h1>
        <p className="text-base md:text-lg mb-5 text-gray-700">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        {/* Buttons Section */}
        <div className="flex items-center gap-6">
          <button className="bg-yellow-500 text-white rounded px-5 py-2 font-semibold hover:bg-yellow-600">
            Find out more
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="./Images/Play.png"
              alt="play icon"
              className="h-10"
            />
            <p className="font-semibold text-gray-800">Play Demo</p>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 hidden md:flex justify-center">
        <img
          src="./Images/Image.png"
          alt="main travel visual"
          className="h-[80vh] object-contain"
        />
      </div>
    </main>
  );
}

export default Home;
