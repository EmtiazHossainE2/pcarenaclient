import Link from "next/link";
import React from "react";

const Category = () => {
  const imageArray = [
    { imgLink: "https://i.ibb.co/xFNWKJ4/casing.png", name: "CASING" },
    { imgLink: "https://i.ibb.co/wzCDvR3/cpu.png", name: "CPU" },
    { imgLink: "https://i.ibb.co/4t6v84Z/cpucooler.png", name: "CPU COOLER" },
    { imgLink: "https://i.ibb.co/cNH8Ss8/gpu.png", name: "GPU" },
    { imgLink: "https://i.ibb.co/H70FxKm/keyboard.png", name: "KEYBOARD" },
    { imgLink: "https://i.ibb.co/whsHCd4/monitor.png", name: "MONITOR" },
    {
      imgLink: "https://i.ibb.co/fvMBwMr/motherboard.png",
      name: "MOTHERBOARD",
    },
    { imgLink: "https://i.ibb.co/vVTbG4y/mouse.png", name: "MOUSE" },
    { imgLink: "https://i.ibb.co/sb4M8dv/psu.png", name: "PSU" },
    { imgLink: "https://i.ibb.co/c8RdqjD/ram.png", name: "RAM" },
    { imgLink: "https://i.ibb.co/42DYwBt/hdd.png", name: "ROM" },
    { imgLink: "https://i.ibb.co/N6v3kZb/speaker.png", name: "SPEAKER" },
    { imgLink: "https://i.ibb.co/0GXNcfj/SSD.png", name: "SSD" },
    { imgLink: "https://i.ibb.co/tbwRq7Q/ups.png", name: "UPS" },
  ];
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <h1 class="mb-4 text-xl justify-center flex md:h-20  font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
         Featured Categories
        </span>
        
      </h1>
      <div className="grid  py-3 gap-4 grid-cols-3   md:grid-cols-5 lg:grid-cols-7 ">
        {imageArray.map((image) => (
          <div
            key={image}
            style={{
              backgroundImage: `url(${image.imgLink})`,
              backgroundSize: "fill",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="w-full bg-opacity-20 h-32 flex justify-center items-end font-extrabold "
          >
            <Link href={`/category/${image.name}`}>
              <h1 class="md:text-2xl text-xl p-4 text-center font-extrabold  from-purple-800 via-green-400 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent break-words">
                {image.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Category;
