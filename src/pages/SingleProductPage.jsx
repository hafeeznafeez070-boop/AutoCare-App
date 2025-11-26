import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // async function getProduct() {
    //   let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    //   let data = await res.json();
    //   setProduct(data);
    //   setLoading(false);
    // }
    // getProduct();
    getSingleProduct(id)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <h1 className="text-center p-6">loading...</h1>;
  if (!product) return <h1 className="text-center p-6">Product Not Found </h1>;
  return (
    <div className="p-6 flex flex-col md:flex-row gap-10 items-center md:items-start">
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.title}
        className="h-80 object-contain"
      />

      {/* DETAILS */}
      <div className="max-w-xl">
        <h2 className="text-2xl font-bold">{product.title}</h2>

        <p className="text-sm mt-2 text-gray-600">
          Category: {product.category}
        </p>

        <p className="mt-4 text-gray-700">{product.description}</p>

        <p className="mt-4 text-green-600 text-2xl font-bold">
          ${product.price}
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl mt-5"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProductPage;
