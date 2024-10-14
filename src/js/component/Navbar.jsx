import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          Navigation Bar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse">
        </button>
      </div>
    </nav>
  );
};

export default Navbar;