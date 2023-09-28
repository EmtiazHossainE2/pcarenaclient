import RootLayout from "@/components/Layouts/RootLayout";
import { React, useState } from "react";
import { Accordion } from "flowbite-react";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
import Head from "next/head";
import { properties } from "@/Shared/constants";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <Head>
        <title>Product Details</title>
        <meta
          name="description"
          content="This page Product Details Page for site"
        />
        <meta name="keywords" content="HTML, CSS, JavaScript, NextJS" />
      </Head>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <Image
            width={500}
            height={500}
            priority
            className="w-full"
            alt="product image"
            src={product?.img1}
          />
          <Image
            width={500}
            height={500}
            priority
            className="mt-6 w-full"
            alt="img of a girl posing"
            src={product?.img2}
          />
        </div>
        <div className="md:hidden">
          <Image
            width={500}
            height={500}
            priority
            className="w-full"
            alt="img of a girl posing"
            src={product?.img1}
          />
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-xl font-bold leading-none text-cyan-500">
              {product?.Category} {product?.Brand}
            </p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-white mt-2">
              {product?.Model}
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg leading-4 text-cyan-500">Price</p>
            <div className="flex items-center justify-center">
              <p className="text-lg leading-none text-cyan-500 mr-3">
                {" "}
                {`$${product?.Price}`}
              </p>
            </div>
          </div>
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700">
            <svg
              className="mr-3"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add your SVG icon here */}
            </svg>
            {product?.Status}
          </button>
          <div>
            {properties?.map((property) => {
              if (product?.[property]) {
                return (
                  <p
                    key={property}
                    className="leading-4 mt-4 text-lg text-cyan-500"
                  >
                    {property}:{" "}
                    <span className="text-white text-lg">
                      {product?.[property]}
                    </span>
                  </p>
                );
              }
              return null; // Don't render if the property doesn't exist
            })}
          </div>
          <div>
            <p className="leading-4 mt-4 text-cyan-500">
              Ratings:{" "}
              <Rating
                initialValue={product?.AvgRatings}
                allowFraction
                size={23}
                readonly
                SVGstyle={{ display: "inline" }}
              ></Rating>
            </p>
            <Accordion
              className="mt-3 mb-2 border-none focus:bg-black"
              collapseAll
            >
              {product?.Reviews?.map((review, index) => (
                <Accordion.Panel className="hover:bg-black" key={index}>
                  <Accordion.Title className="text-green-600 hover:bg-black">
                    {`Review ${index + 1}`}
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-300 dark:text-gray-400">
                      {review}
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <p className="text-justify text-lg lg:leading-tight leading-normal text-cyan-500 mt-7">
        {product?.Details}
      </p>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
 
  const res = await fetch(`${process.env.BACKEND_URL}/products/`);
  const products = await res.json();

  const paths = products.data.products.map((product) => ({
    params: {
      id: product._id,
    },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
 
  const res = await fetch(
    `${process.env.BACKEND_URL}/products/id/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};


