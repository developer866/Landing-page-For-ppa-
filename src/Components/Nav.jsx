import React, { useState, useRef, useEffect } from "react";

function Nav() {
  const [show, setShow] = useState(true);
  const menuRef = useRef(null);

  const showModal = () => {
    setShow(!show);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(true); // Close the menu
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
    <nav className="bg-gray-500 text-white p-3 md:p-1 flex justify-between align-middle content-center items-center relative">
      <h1 className="text-3xl">DHA</h1>
      <img
        src="./download.png"
        alt="hamburger"
        onClick={showModal}
        className="md:hidden w-[7%] cursor-pointer"
      />
      {!show && (
        <ul
          ref={menuRef}
          className="absolute top-0 pt-10 right-0 bg-cyan-800 h-40 w-30 md:hidden gap-2 p-4 z-50"
        >
          <img
            onClick={() => showModal(true)}
            src="./icons8-close-50.svg"
            alt="close icon"
            className="absolute top-0 right-0 w-10"
          />
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Program">Program</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}
      <ul ref={menuRef} className="hidden md:flex gap-2 p-4 z-50">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Program">Program</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
