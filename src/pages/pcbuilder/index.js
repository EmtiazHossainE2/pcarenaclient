import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import React, { createRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeFromBuild } from "../../../features/pcBuilder/pcBuilderSlice";
import Link from "next/link";
import { toast } from "react-toastify";
import Head from "next/head";

const PcBuilder = () => {
  // const ref = createRef(null)
  // const [image, takeScreenshot] = useScreenshot({
  //   type: 'image/jpeg',
  //   quality:1.0
  // })
  // const download = (image, { name = 'sampleImg', extension = 'jpg' } = {}) => {
  //   // Your download logic here
  //   const a = document.createElement('a');
  //   a.href=image;
  //   a.download=createFileName(extension,name)
  //   a.click()
  // };

  // const getImage = () => {
  //   takeScreenshot(ref.current).then(download)
  // }
  const category = [
    {
      name: "CPU",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/cpu.svg",
    },
    {
      name: "RAM",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/ram.svg",
    },
    {
      name: "MOTHERBOARD",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/motherboard.svg",
    },
    {
      name: "MONITOR",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/monitor.svg",
    },
    {
      name: "PSU",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/psupply.svg",
    },
    {
      name: "ROM",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/hdd.svg",
    },
    {
      name: "CASING",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/casing.svg",
    },
    {
      name: "CPU COOLER",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/cooler.svg",
    },
    {
      name: "GPU",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/gcard.svg",
    },
    {
      name: "KEYBOARD",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/keyboard.svg",
    },
    {
      name: "MOUSE",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/mouse.svg",
    },
    { name: "SPEAKER", imgLink: "https://i.ibb.co/34GCKcB/soundbox.png" },
    { name: "SSD", imgLink: "https://i.ibb.co/7g2rBJg/ssdd.png" },
    {
      name: "UPS",
      imgLink:
        "https://www.startech.com.bd/catalog/view/theme/starship/images/ups.svg",
    },
  ];

  const requiry = [
    "CPU",
    "RAM",
    "MOTHERBOARD",
    "MONITOR",
    "PSU",
    "ROM",
    "CASING",
  ];
  const Build = useSelector((state) => state.pcBuilder.build);
  const RequiredCategory = useSelector(
    (state) => state.pcBuilder.requiredCategory
  );

  const dispatch = useDispatch();
  return (
    // ref={ref}
    <div className="my-3">
      <Head>
        <title>Pc Build</title>
        <meta name="description" content="This page Pc Build Page for site" />
        <meta name="keywords" content="HTML, CSS, JavaScript, NextJS" />
      </Head>
      <div className="w-full   lg:px-[20%] pr-[7%] pl-[1%] h-auto py-5 bg-slate-200 text-black gap-3 grid grid-cols-12 place-items-start items-center divide-y-reverse divide-slate-800">
        {category?.map((cat, index) => (
          <>
            <div
              key={index}
              className="col-span-2 ml-auto rounded-lg  bg-slate-400 bg-opacity-30"
            >
              <Image
                className="rounded-lg ml-auto"
                width={60}
                height={80}
                alt="product image"
                src={
                  Build[cat.name]?.Image ? Build[cat.name]?.Image : cat.imgLink
                }
              ></Image>
            </div>
            <div className="col-span-6 break-words">
              <span className="flex justify-start flex-wrap  gap-3">
                <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold  lg:text-lg ">
                  {cat.name}
                </p>
                <p className="text-xs  lg:text-lg ">{Build[cat.name]?.Brand}</p>
                {requiry.includes(cat?.name) ? (
                  <p className="font-bold   text-xs  lg:text-lg text-center align-middle  text-cyan-900 px-1 bg-white rounded-lg">
                    Required
                  </p>
                ) : (
                  ""
                )}
              </span>
              <p className="text-xs  lg:text-lg ">{Build[cat.name]?.Model}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs  lg:text-lg ">
                {Build[cat.name]?.Price ? `${Build[cat.name]?.Price}$` : ""}
              </p>
            </div>
            <div className="col-span-2">
              {Build[cat.name]?.Price ? (
                <button
                  onClick={() => dispatch(removeFromBuild(cat.name))}
                  type="button"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm md:px-3 px-1 md:py-2 py-1text-center  mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  Remove
                </button>
              ) : (
                <Link href={`category/${cat?.name}?build=pcBuild}`}>
                  <button
                    onClick={() => dispatch(removeFromBuild(cat.name))}
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm md:px-3 px-1 md:py-2 py-1text-center  mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </>
        ))}
      </div>
      {RequiredCategory?.length == 7 && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => {
              // getImage(ref)
              toast.success("🖥🖥 Build Completed !!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }}
            class="relative px-4  py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors font-bold duration-300 delay-200 group-hover:text-white ease">
              Complete Build
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
