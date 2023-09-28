import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Autoplay, Thumbs } from "swiper/modules";
import Image from "next/image";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Autoplay, Navigation, Thumbs]}
          className="mySwiper2  "
        >
          <SwiperSlide>
            <Image width={500} height={500} priority alt="slider image"
              className="object-cover object-center"
              src="https://i.ibb.co/8rzbd77/slider1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={500} height={500} priority alt="slider image"
              className="object-fill object-center"
              src="https://i.ibb.co/8zPnTPp/slider2.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={500} height={500} priority alt="slider image" src="https://i.ibb.co/M6c6VNK/slider3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={500} height={500} priority alt="slider image" src="https://i.ibb.co/NpBmx4B/slider4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={500} height={500} priority alt="slider image" src="https://i.ibb.co/ssztkKD/slider5.png" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper  "
        >
          <SwiperSlide>
            <Image width={500} height={500} priority alt="slider image"
              className="object-cover object-center"
              src="https://i.ibb.co/8rzbd77/slider1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={500} height={500} priority alt="slider image"
              className="object-fill object-center"
              src="https://i.ibb.co/8zPnTPp/slider2.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={1500} height={1500} priority alt="slider image" src="https://i.ibb.co/M6c6VNK/slider3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={500} height={500} priority alt="slider image" src="https://i.ibb.co/NpBmx4B/slider4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={500} height={500} priority alt="slider image" src="https://i.ibb.co/ssztkKD/slider5.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
