import React from "react";

function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-center">
      <h2 className="text-orange-400 font-medium text-sm mb-2">Testimonials</h2>
      <h1 className="text-3xl font-bold mb-12">What people say about Us.</h1>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Testimonial Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 max-w-sm mx-auto">
          <p className="text-gray-600 italic mb-4">
            “On the Windows talking painted pasture yet its express parties use. Sure last upon
            he same as knew next. Of believed or diverted no.”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/user1.jpg"
              alt="Mike Taylor"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <h4 className="font-bold text-gray-800">Mike Taylor</h4>
              <p className="text-sm text-gray-500">Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 max-w-sm mx-auto">
          <p className="text-gray-600 italic mb-4">
            “On the Windows talking painted pasture yet its express parties use. Sure last upon
            he same as knew next. Of believed or diverted no.”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/user2.jpg"
              alt="Chris Thomas"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <h4 className="font-bold text-gray-800">Chris Thomas</h4>
              <p className="text-sm text-gray-500">CEO of Red Button</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
