function CartPage() {
  // Calculate total price
  // const total = items.reduce((sum, item) => sum + item.price, 0);

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
            </div>

            {/* REMOVE BUTTON */}
            <button className="bg-red-600 text-white px-4 py-2 rounded-xl">
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* TOTAL PRICE */}
      <div className="text-right mt-6 text-2xl font-bold">
        {/* Total: ${total.toFixed(2)} */}
      </div>
    </div>
  );
}

export default CartPage;
