import ratingImg from "../../public/Frame 35.png";

function Card({ product, onClick }) {
  //   const [cardHover, setCardHover] = useState(false);
  //   console.log("=====>>>>>", product);s
  return (
    <div
      onClick={onClick}
      className=" p-4 rounded-lg  hover:shadow-lg transition cursor-pointer"
    >
      <div className=" relative bg-[#F0EEED] p-5 rounded-3xl ">
        <img
          className="w-[295px] h-[298px] object-contain"
          // className="h-40 mx-auto"
          src={product.image}
        />
      </div>

      <h3
        // className="mt-2 font-semibold line-clamp-2"
        className="text-[20px] font-bold mt-4 mb-2"
      >
        {product.title.slice(0, 20)}
      </h3>
      <img src={ratingImg} />
      <p
        // className="text-green-600 font-bold mt-1"
        className="text-[24px] font-bold mt-2 mb-4"
      >
        ${product.price}
      </p>
    </div>
  );
}

export default Card;
