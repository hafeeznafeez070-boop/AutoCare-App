import { Link } from "react-router-dom";
import navBarImg from "../../public/SHOP.CO.png";
import { useSelector } from "react-redux";

function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  // const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartCount = cartItems.length;
  return (
    <nav className=" bg-gray-50">
      {/* Mobile NavBar */}
      <div className="sm:hidden flex justify-between px-4 bg-[#9A9A9A]">
        <div className="flex justify-center items-center ">
          <div className="p-2">
            <i className="text-2xl font-bold text-black  ri-menu-line"></i>
          </div>
          <div className="p-2 ">
            <Link
              to={"/"}
              className=" text-[25px] font-integralcf  hover:underline"
            >
              <img src={navBarImg} alt="imgShop" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <i className="text-2xl font-bold ri-search-line"></i>
          </div>
          <div className="overflow-y-hidden  relative px-6 h-15 inline-flex items-center">
            <i className="text-2xl font-bold  ri-shopping-cart-line"></i>

            <span className="absolute   top-2 right-2 h-5 w-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold ">
              {cartCount}
            </span>
          </div>
          <div>
            <i className="text-2xl font-bold ri-user-line"></i>
          </div>
        </div>
      </div>
      {/* larger NavBar */}
      <div className=" hidden md:flex px-10 items-center py-2 shadow ">
        <Link to={"/"} className="p-2 text-[32px] font-bold hover:underline">
          <img src={navBarImg} alt="imgShop" />
        </Link>
        <Link
          to={"/cart"}
          className="p-2 text-[18px] font-bold  hover:underline"
        >
          <div className="overflow-y-hidden  relative px-6 h-15 inline-flex items-center">
            <i className="  ri-shopping-cart-line"></i>

            <span className="absolute   top-2 right-2 h-5 w-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold ">
              {cartCount}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
