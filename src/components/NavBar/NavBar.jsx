import React from "react";
import spaceX from '../../images/spaceX.jpg'
const NavBar = () => {
  return (
    <nav className="bg-black shadow">
      <div className="sm:px-4 lg:px-8">
        <div className="flex justify-center">
          <div className="flex items-center justify-center">
            <span
              className="inline-flex items-center w-1/2"
            >
              <img src={spaceX} alt='spaceX' />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;