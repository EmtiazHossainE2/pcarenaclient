import ProductCard from "@/Shared/ProductCard";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Category = ({ products}) => {
  const router = useRouter();
  const { category,build } = router.query;

  return (
    <div className="w-full relative px-[5%]">
      <Head>
        <title>Category Page</title>
        <meta name="description"
                    content="This page have products of different categories of computer" />
                <meta name="keywords"
                    content="HTML, CSS, JavaScript, NextJS" />
      </Head>
      <p className="font-bold absolute left-[26%] md:left-[36%] lg:left-[42%] text-3xl mb-[-200px]justify-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">{`All ${category} Page`}</p>
      <div className="grid gap-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 mb-5">
        {products?.map((product, i) => (
          <ProductCard key={i} build={build} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products/`);
  const products = await res.json();

  const paths = products.data.products.map((product) => ({
    params: {
      category: product.Category,
    },
  }));
  return { paths, fallback: true };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `${process.env.BACKEND_URL}/products/category/${params.category}`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};
