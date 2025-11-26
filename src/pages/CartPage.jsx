import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../redux/cartSlice";

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
      <h1 className="text-3xl mb-6">Your Cart</h1>

      <div className="flex flex-col gap-6">
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
            <div className="flex-1">
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-green-600 font-bold mt-2">${item.price}</p>
              {/* QUANTITY BUTTONS */}
              <div className="flex items-center gap-4 mt-3">
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
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              Remove
            </button>
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
