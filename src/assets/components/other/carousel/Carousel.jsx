// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Carousel = () => {
  return (
    <Swiper
      // Swiper modüllerini kur
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      loop={true} 
      loopedSlides={2} 
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="relative h-[700px] bg-cover bg-center bg-[url('https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg.webp')] flex items-center justify-around">
          <div className="text flex flex-col items-center gap-3">
            <span className="font-clicker text-[50px] text-red-sale">Fashion Sale</span>
            <h4 className="font-jost text-[55px] font-medium text-center">Minimal Menz Style</h4>
            <p className="w-[441px] font-icons text-center">
              Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
              voluptas iure, delectus dignissimos facilis neque nulla earum.
            </p>
            <button className="px-[47px] py-[15px] border-black border-[1px] bg-black text-white hover:bg-transparent hover:text-black duration-300 font-jost">SHOP NOW</button>
          </div>
          <div></div>
          <div></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[700px] bg-cover bg-center bg-[url('https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg.webp')] flex items-center justify-around">
          <div></div>
          <div></div>
        <div className="text flex flex-col items-center">
            <span className="font-clicker text-[50px] text-red-sale">Fashion Sale</span>
            <h4 className="font-jost text-[55px] font-medium text-center">Minimal Menz Style</h4>
            <p className="w-[441px] font-icons text-center">
              Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
              voluptas iure, delectus dignissimos facilis neque nulla earum.
            </p>
            <button className="px-[47px] py-[15px] border-black border-[1px] bg-black text-white hover:bg-transparent hover:text-black duration-300 font-jost">SHOP NOW</button>

          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
