import { Link } from "react-router-dom";
import navBarImg from "../../public/SHOP.CO.png";
import { useSelector } from "react-redux";

function NavBar() {
  const cartCount = useSelector((state) => state.cart.items.length);
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
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
