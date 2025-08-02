import React, { useState, useRef, useEffect } from "react";

function Nav() {
  const [show, setShow] = useState(true);
  const mobileMenuRef = useRef(null); // Separate ref for mobile menu

  const toggleMenu = () => {
    setShow(!show);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setShow(true);
      }
    };

    if (!show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <nav className="p-3 md:p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <h1 className="text-3xl font-bold">DHA</h1>

      {/* Hamburger menu icon (Mobile) */}
      <img
        src="./download.png"
        alt="hamburger"
        onClick={toggleMenu}
        className="md:hidden w-8 cursor-pointer"
      />

      {/* Mobile Menu */}
      {!show && (
        <ul
          ref={mobileMenuRef}
          className="absolute top-0 right-0 pt-12 bg-cyan-800 text-white h-40 w-40 md:hidden flex flex-col gap-2 px-4 z-50"
        >
          <img
            onClick={toggleMenu}
            src="./icons8-close-50.svg"
            alt="close icon"
            className="absolute top-2 right-2 w-6 cursor-pointer"
          />
          <li><a href="#Home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#About" onClick={toggleMenu}>About</a></li>
          <li><a href="#Program" onClick={toggleMenu}>Program</a></li>
          <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 text-lg font-medium">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Program">Program</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
