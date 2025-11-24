import React from "react";
import { Link } from "react-router-dom";
import navBarImg from "../../public/SHOP.CO.png";

function NavBar() {
  return (
    <nav className="bg-gray-50">
      <div className="flex px-10 items-center py-2 shadow ">
        <Link to={"/"} className="p-2 text-[32px] font-bold hover:underline">
          <img src={navBarImg} alt="imgShop" />
        </Link>
        <Link to={"/products"} className="p-2  hover:underline">
          Products
        </Link>
        <Link to={"/cart"} className="p-2  hover:underline">
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
