import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "../card/Card";
import { useQuery } from "react-query";
import axios from "axios";

const CarouselApi = () => {
  const { data, isLoading } = useQuery(
    ["products"], 
    async () => {
    const { data } = await axios.get("https://66eba35c2b6cf2b89c5b2596.mockapi.io/Product");
    console.log(data.map((item)=>item.image));
    return data;
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50} 
      slidesPerView={5} 
      navigation
      pagination={{ clickable: true }} 
      loop={true} 
      className="p-11"
      // loopedSlides={data.length} 
      >
      {
        data && data.map((item) => (
        <SwiperSlide key={item.id} className="flex justify-center">
          <Card
            name={item.name}
            image={`${item.image}?t=${new Date().getTime()}`} 
            lastcost={item.lastCost}
            newcost={item.newCost}
          />
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselApi;
