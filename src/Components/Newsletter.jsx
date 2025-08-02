import React from "react";

function Newsletter() {
  return (
    <section className="bg-orange-50 py-16 px-6 md:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Subscribe to get information, latest news <br />
        and other interesting offers about <span className="text-orange-500">Jadoo</span>
      </h2>

      <form className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Your email"
          className="px-5 py-3 w-full md:w-80 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
