import React from "react";

function Service() {
  return (
    <section className="py-16 bg-gray-50 text-center px-4 ">
      <h2 className="text-xl text-[#DF6951] mb-4 font-semibold tracking-widest">
        CATEGORY
      </h2>
      <h3 className="text-3xl font-bold mb-12">We Offer Best Services</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition flex flex-col justify-between">
          <img
            src="./undraw_weather-notification_5wuk.svg"
            alt="weather"
            className="mx-auto mb-4 "
          />
          <div>
            <h4 className="text-xl font-semibold mb-2">Calculated Weather</h4>
            <p className="text-gray-600">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition flex flex-col justify-between">
          <img
            src="./undraw_aircraft_usu4.svg"
            alt="flight"
            className="mx-auto mb-4 "
          />
          <div>
            <h4 className="text-xl font-semibold mb-2">Best Flights</h4>
            <p className="text-gray-600">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition flex flex-col justify-between">
          <img
            src="./undraw_festivities_q090.svg"
            alt="event"
            className="mx-auto mb-4 "
          />
          <div>
            <h4 className="text-xl font-semibold mb-2">Local Events</h4>
            <p className="text-gray-600">
              Barton vanity itself do in it. Prefer to men it engrossed
              listening.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition flex flex-col justify-between">
          <img
            src="./undraw_advanced-customization_7ms4.svg"
            alt="customization"
            className="mx-auto mb-4 "
          />
          <div>
            <h4 className="text-xl font-semibold mb-2">Customization</h4>
            <p className="text-gray-600">
              We deliver outsourced aviation services for military customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
