import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container bg-white h-20 shadow-md flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold uppercase">Trang Quản trị</h1>
        <Link to="/login">
          <span className="text-xl">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
