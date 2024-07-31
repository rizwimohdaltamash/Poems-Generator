import React from "react";
import { Fa500Px } from "react-icons/fa";

const MyNavbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Fa500Px className="text-red-500 mr-2 text-2xl" />
          <a href="#home" className="text-red-700 text-xl">
            AIPoem-Generator
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default MyNavbar;
