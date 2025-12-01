import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";
import { use } from "react";
import bannerImg from "/banner-img.png";
import mobBanner from "/mobileBanner.png";
import logo_1 from "/Vector.png";
import logo_2 from "/zara-logo-1 1.png";
import logo_3 from "/gucci-logo-1 1.png";
import logo_4 from "/prada-logo-1 1.png";
import logo_5 from "/Group.png";
import newArival from "/NEW ARRIVALS.png";
import mblogo1 from "/mbLogo1.png";
import mblogo2 from "/mbLogo2.png";
import mblogo3 from "/mbLogo3.png";
import mblogo4 from "/mbLogo4.png";
import mblogo5 from "/mbLogo5.png";
import mbNewArival from "/mob-new-arival.png";
import topSelling from "/top selling.png";
import mobTopSelling from "/top selling_mob.png";

import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

function ProductPage() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // useEffect(() => {
  //   getAllProducts()
  //     .then((res) => {
  //       setProducts(res.data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setError("Failed to load products");
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <h2 className="p-6">Loading...</h2>;
  // if (error) return <h2 className="p-6 text-red-500">{error}</h2>;
  const [products, setProducts] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Some Thing Went Wrong");
        setLoading(false);
      });
  }, []);
  // if (products[0]) {
  //   console.log(products[0].rating.rate);
  // }

  const topRatingFunction = () => {
    if (products[0]) {
      for (const product of products) {
        if (product.rating.rate >= 4.5) {
          setTopRatedProducts((prev) => [...prev, product]);
          // console.log(product.rating);
        }
      }
      console.log(topRatedProducts);
    }
  };

  useEffect(() => {
    topRatingFunction();
  }, [products]);

  if (loading) return <h2 className="p-6">Loading...</h2>;
  if (error) return <h2 className="p-6 text-red-500">{error}</h2>;

  return (
    // <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //   {products.map((product) => (
    //     <div
    //       key={product.id}
    //       className="border p-4 rounded-lg shadow hover:shadow-lg transition"
    //     >
    //       <img
    //         src={product.image}
    //         alt={product.title}
    //         className="h-40 mx-auto"
    //       />
    //       <h3 className="mt-2 font-semibold">{product.title}</h3>
    //       <p className="text-green-600 font-bold mt-1">${product.price}</p>
    //     </div>
    //   ))}
    // </div>
    <div className=" flex flex-col  lg:items-center ">
      <div className=" bg_img_div flex items-start  lg:items-center pt-5 py-4 px-5 w-full">
        <div className=" lg:ml-5 lg:w-1/2 w-full">
          <p className="   leading-10 text-[36px]  font-integralcf overflow-y-hidden  lg:text-[64px] lg:leading-16">
            FIND CLOTHES <br />
            THAT MATCHES YOUR STYLE
          </p>
          <p className="font-satoshi text-[14px] lg:text-[16px] opacity-60 mt-[29px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-[16px] text-white rounded-3xl mt-[35px] shadow w-[98%] sm:w-[210px] h-[52px]">
            Shop Now
          </button>
          <div className="lg:flex  mt-7">
            <div className="flex   justify-around ">
              <div className=" lg:border-r lg:pr-8 border-[#00000010] ">
                <p className="lg:text-[40px]  text-[24px] font-satoshi font-bold ">
                  200+
                </p>
                <p className="lg:text-[16px] text-[12px] font-satoshi opacity-60">
                  International Brand
                </p>
              </div>
              <div className="lg:border-r lg:pr-8 lg:pl-8  border-[#00000010] ">
                <p className="lg:text-[40px] text-[24px] font-satoshi font-bold">
                  2,000+
                </p>
                <p className="lg:text-[16px]  text-[12px] font-satoshi opacity-60">
                  High-Quality Products
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-3 justify-center items-center lg:pl-8 lg:pr-8">
              <p className="lg:text-[40px] text-[24px] font-satoshi font-bold">
                30,000+
              </p>
              <p className="lg:text-[16px] text-[12px]  font-satoshi opacity-60">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div>{/* <img src={bannerImg} alt="Image" /> */}</div>
      </div>
      {/* mob_bg_img_div */}
      <div className=" lg:hidden flex bg-[#F0EEED] justify-center items-center  ">
        <img src={mobBanner} alt="imageBanner" />
      </div>
      <div className="hidden sm:flex bg-black text-white   justify-around items-center w-full  h-[126px]">
        <div>
          <img src={logo_1} />
        </div>
        <div>
          <img src={logo_2} />
        </div>
        <div>
          <img src={logo_3} />
        </div>
        <div>
          <img src={logo_4} />
        </div>
        <div>
          <img src={logo_5} />
        </div>
      </div>

      <div className=" sm:hidden bg-black text-white  xl:flex-col  my-11 justify-center lg:justify-around w-full  h-[126px]">
        <div className="flex justify-between border-amber-50 my-6 mx-3 ">
          <div>
            <img className="sm:hidden" src={mblogo1} />
          </div>
          <div>
            <img className="sm:hidden" src={mblogo2} />
          </div>
          <div>
            <img className="sm:hidden" src={mblogo3} />
          </div>
        </div>
        <div className="flex justify-around">
          <div>
            <img className="sm:hidden" src={mblogo4} />
          </div>
          <div>
            <img className="sm:hidden" src={mblogo5} />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-[72px] pb-[55px] w-full">
        <div>
          <img className="sm:block hidden" src={newArival} />
          <img className="lg:hidden " src={mbNewArival} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   sm:gap-2  max-w-[1240px] w-full  ">
        {products.map((product) => (
          <Card
            onClick={() => navigate(`/products/${product.id}`)}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div>
        <div className="flex justify-center items-center my-10">
          <img
            className="sm:hidden flex"
            src={mobTopSelling}
            alt="Top Selling"
          />
          <img className="hidden sm:flex" src={topSelling} alt="Top Selling" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   sm:gap-2  max-w-[1240px] w-full  ">
          {topRatedProducts.map((product) => (
            <Card
              onClick={() => navigate(`/products/${product.id}`)}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
