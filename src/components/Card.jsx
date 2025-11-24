import React, { useState } from "react";
import { Link } from "react-router-dom";
import ratingImg from "../../public/Frame 35.png";

function Card({ product, onClick }) {
  //   const [cardHover, setCardHover] = useState(false);
  //   console.log("=====>>>>>", product);s
  return (
    <div
      onClick={onClick}
      className="border p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
    >
      {/* <div className={cardHover ? ` text-red-600  text-end ` : `hidden`}>i</div> */}
      <div
      // onMouseEnter={() => setCardHover(true)}
      // onMouseLeave={() => setCardHover(false)}
      >
        <div className=" relative bg-[#F0EEED] p-5 rounded-3xl ">
          <img
            // className="w-[295px] h-[298px] object-contain"
            className="h-40 mx-auto"
            src={product.image}
          />
        </div>

        <h3
          className="mt-2 font-semibold line-clamp-2"
          // className="text-[20px] font-bold mt-4 mb-2"
        >
          {product.title.slice(0, 20)}
        </h3>
        <img src={ratingImg} />
        <p
          className="text-green-600 font-bold mt-1"
          // className="text-[24px] font-bold mt-2 mb-4"
        >
          ${product.price}
        </p>
        {/* <button
          className={
            cardHover ? `bg-green-600 text-white rounded-xl p-2 ` : `hidden`
          }
        >
          Add To Cart
        </button> */}
      </div>
    </div>
  );
}

export default Card;
