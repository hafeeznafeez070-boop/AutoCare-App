import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../redux/cartSlice";
import cartImg from "/Your cart_web.png";

function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // Calculate total price
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (items.length === 0) {
    return <h1 className="text-center p-10 text-2xl">Cart is Empty</h1>;
  }

  return (
    <div className="p-6">
      <div className="pt-5 pb-10">
        <img src={cartImg} alt="Cart Image" />
      </div>

      <div className="flex flex-col w-1/2  gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-6 items-center border p-4 rounded-xl"
          >
            {/* PRODUCT IMAGE */}
            <img
              src={item.image}
              className="h-24 object-contain"
              alt={item.title}
            />

            {/* DETAILS */}
            <div className="flex-1   ">
              <div className="flex justify-between p-3">
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="text-green-600 font-bold mt-2">${item.price}</p>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className=" text-red-600    text-3xl   rounded-xl"
                  >
                    <i class="ri-delete-bin-fill"></i>
                  </button>
                </div>
              </div>
              {/* QUANTITY BUTTONS */}
              <div className="flex justify-end gap-4  ">
                <button
                  className="px-3 py-1 bg-gray-300 rounded"
                  onClick={() => dispatch(decreaseQty(item.id))}
                >
                  -
                </button>

                <span className="font-bold text-xl">{item.qty}</span>

                <button
                  className="px-3 py-1 bg-gray-300 rounded"
                  onClick={() => dispatch(increaseQty(item.id))}
                >
                  +
                </button>
              </div>
            </div>

            {/* REMOVE BUTTON */}
          </div>
        ))}
      </div>

      {/* TOTAL PRICE */}
      <div className="text-right mt-6 text-2xl font-bold">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}

export default CartPage;
