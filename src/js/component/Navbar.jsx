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
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo01" 
          aria-controls="navbarTogglerDemo01" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav text-white me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <a className="nav-link active text-end mt-3 me-3" href="#">Item 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-end me-3" href="#">Item 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-end me-3" href="#">Item 3</a>
             </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;