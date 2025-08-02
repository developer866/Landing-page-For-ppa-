import React from "react";

function Destination() {
  const destinations = [
    {
      city: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip",
      image: "/rome.jpg",
    },
    {
      city: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
      image: "/london.jpg",
    },
    {
      city: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
      image: "/europe.jpg",
    },
  ];

  return (
    <section className="text-center  py-12 bg-white md:px-20">
      <p className="text-orange-400 text-sm uppercase">Top Selling</p>
      <h2 className="text-3xl font-bold mb-10">Top Destinations</h2>

      <div className="grid md:grid-cols-3 gap-6 justify-center ">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg border hover:shadow-2xl transition duration-300"
          >
            <img
              src={dest.image}
              alt={dest.city}
              className="h-60 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between text-lg font-semibold">
                <h3>{dest.city}</h3>
                <p className="text-orange-500">{dest.price}</p>
              </div>
              <p className="text-gray-500 text-sm mt-2">{dest.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destination;
