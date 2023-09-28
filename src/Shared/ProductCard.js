import React from "react";

import { Rating } from "react-simple-star-rating";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToBuild } from "../../features/pcBuilder/pcBuilderSlice";
import Image from "next/image";
const ProductCard = ({ product, build }) => {
  const truncatedText =
    product?.Model.length > 20
      ? `${product?.Model.slice(0, 20)}...`
      : product?.Model;
  const dispatch = useDispatch();
  const pcBuilder = {
    Category: product?.Category.toUpperCase(),
    Price: product?.Price,
    Image: product?.img1,
    Model: product?.Model,
    Brand: product?.Brand,
  };

  return (
    <div class="max-w-sm overflow-hidden mx-0  shadow-2xl mt-16">
      <div class="shadow-md rounded-lg max-w-sm bg-gray-800 border-gray-700">
        <div class="relative">
          <Image width={500} height={500} priority src={`${product?.img1}`} alt="Imagem de perfil" />
          <Image width={500} height={500} priority
            src={`${product?.img2}`}
            class=" absolute top-0 left-0 opacity-0 transition-opacity duration-700 transform hover:opacity-100"
            alt="Nova imagem"
          />
          <p class="absolute top-0 bg-yellow-300  text-black font-semibold py-1 px-3 rounded-br-lg rounded-tl-l">
            {product?.Status}
          </p>
        </div>

        <div class="p-5">
          <h3
            title={product.Model}
            class=" capitalize font-medium break-all text-lg tracking-tight  text-yellow-50 inline-block text-transparent bg-clip-text cursor-pointer py-2 "
          >
            {truncatedText}
          </h3>
          <br></br>
          <h3 class=" font-bold text-xl tracking-tight text-yellow-100 inline-block text-transparent bg-clip-text cursor-pointer py-2 ">
            {product?.Category}
          </h3>
          <div className=" py-3">
            <Rating
              initialValue={product?.AvgRatings}
              allowFraction
              size={23}
              readonly
              SVGstyle={{ display: "inline" }}
            ></Rating>
          </div>

          <div class="flex shrink-sm items-center justify-between  ">
            <span class="md:text-xl  text-md  text-yellow-400 font-semibold">{`$${product?.Price}`}</span>
            {/* <p class="button-74">Add to cart</p> */}

            {build ? (
              <Link href={`/pcbuilder`}>
                <button
                  onClick={() => dispatch(addToBuild(pcBuilder))}
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="inline-block overflow-hidden rounded bg-primary mx-1 md:mx-0 px-1 md:px-4 pb-2 pt-2.5 text-xs font-serif font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  ADD
                </button>
              </Link>
            ) : (
              <Link href={`/productdetails/${product?._id}`}>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="inline-block overflow-hidden rounded bg-primary mx-1 md:mx-0 px-1 md:px-4 pb-2 pt-2.5 text-xs font-serif font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Details
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
// https://i.ibb.co/KjwX5pf/Edifier-R19-U-2-0-USB-Audio-Power-Speaker-1.png
//https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
//  <img src={finantoPerfil} class="rounded-full transition-transform duration-300 transform hover:scale-110" alt="Imagem de perfil" />
{
  /* <img src={teste} class="rounded-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100" alt="Nova imagem" /> */
}
