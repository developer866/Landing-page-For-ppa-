
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    gsap.to(".box", {
      x: 400,
      duration: 2,
      delay:2,
      scrollTrigger: {
        trigger: ".box",
        start: "top 80%",
        end: "top 30%",
        // scrub: true,
        // markers: true, // Remove this line in production
      },
    });
  }, []); // <- Important: Only run this once after mount

  return (
    <div id="Home" className="h-[100vh] p-10">
      <h1 className="text-white text-3xl mb-10">About</h1>
      <div className="box bg-red-600 h-[200px] w-[300px]"></div>
    </div>
  );
}

export default About;
