import React from "react";

function Home() {
  return (
    <main className="h-[100vh] md:px-10 flex items-center border md:w-[100%]">
      <div className="md:w-[50%] px-10 justify-center items-center ">
        <p className="text-[#DF6951] md:w-[600px] font-extrabold text-1xl mb-5">
          BEST DESTINATION AROUND THE WORLD
        </p>
        <h1 className="text-5xl font-bold mb-5">
          Travel,Enjoy and live a new and full life{" "}
        </h1>
        <p className="text-1xl mb-5">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex">
          <button className="bg-yellow-500 rounded-sm items-center px-1.5">
            Find out more
          </button>
          <div
            className=" flex items-center justify-between 
          "
          >
            <img
              src="./Images/Play.png"
              alt="play icon"
              className=" h-10 items-center top-2 relative"
            />
            <p>play demo</p>
          </div>
        </div>
      </div>
      <div>
        <img src="./Images/Image.png" alt="images" className="h-[80vh] hidden md:flex " />
      </div>
    </main>
  );
}

export default Home;
