import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { SiValorant, SiFifa } from "react-icons/si";
import Hero from "@/Shared/Hero";
import Link from "next/link";
import Header from "@/Shared/Header";
import ProductCard from "@/Shared/ProductCard";
import Category from "@/Shared/Category";
import Footer from "@/components/Footer";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

export default function Home({ products }) {

  return (
    <div className=" ">
      <Head>
        <title>Home Page</title>
        <meta name="description"
                    content="This page is Home Page for site" />
                <meta name="keywords"
                    content="HTML, CSS, JavaScript, NextJS" />
      </Head>
      {/* {console.log(props.length)} */}
      <Hero></Hero>
      <div className="w-full h-auto md:mt-9 mt-2">
        <Category></Category>
      </div>
      <div>
        <h1 class=" mt-3 md:-mb-[20px] text-xl justify-center flex md:h-14  font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text  md:h-20   bg-gradient-to-r to-emerald-600 from-sky-400 ">
            Featured Components
          </span>
        </h1>
        <div className="grid gap-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 mb-5">
          {products.data.map((product, i) => (
            <ProductCard key={i} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products/random/`);
  const data = await res.json();
 
  return {
    props: {
      products: data,
    },
  };
};
