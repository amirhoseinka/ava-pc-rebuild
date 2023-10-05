"use client";
import Image from "next/image";
import loading from "@/public/pictures/loading/loading.gif";

import gridFirstPic from "@/public/pictures/mahsoulat/gridFirstPic.jpg"
import gridSecondPic from "@/public/pictures/mahsoulat/gridSecondPic.jpg"
import gridThirdPic from "@/public/pictures/mahsoulat/gridThirdPic.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useGetAllProductsQuery } from "@/app/redux/apiServices/apiSlice";
import swiperCore from "swiper";
import { LuBadgePercent } from "react-icons/lu";
import { AiOutlineLeft } from "react-icons/ai";
import "swiper/css";

const JadidTarinHa = () => {
  swiperCore.use([Autoplay]);
  const { data, isLoading } = useGetAllProductsQuery();
  return (
    <>
      <div className="mx-2">
        <div className="flex justify-between bg-gray-200 md:text-xl container mx-auto  my-3 md:my-5 py-3 md:py-7 rounded-lg">
          <p className="md:ms-10 ms-2 flex font-bold">
            <LuBadgePercent className="flex my-auto me-1 font-bold text-center" />
            جدیدترین های فروشگاه آوا
          </p>
          <p className="md:me-10 me-2 flex ">
            مشاهده همه <AiOutlineLeft className="text-sm flex my-auto ms-1" />
          </p>
        </div>
      </div>
      <div className="mx-2">
        <Swiper
          slidesPerView={1}
          loop
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            576: {
              // width: 576 ,
              slidesPerView: 2,
            },
            768: {
              // width: 768,
              slidesPerView: 3,
            },
            1024: {
              // width: 768,
              slidesPerView: 4,
            },
            1280: {
              // width: 768,
              slidesPerView: 5,
            },
          }}
          className="mt-3 container rounded-lg"
        >
          {isLoading ? (
            <p className="flex justify-center">
              <Image src={loading} width={50} height={50} alt="loading" />
            </p>
          ) : (
            <>
              {data?.map((product) => (
                <SwiperSlide key={product.id} className="shadow-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-48 h-48 object-scale-down mx-auto p-3 "
                  />
                  <div className="p-3 flex flex-col">
                    <span className="text-sm h-10  text-ellipsis overflow-hidden">
                      نام محصول در این قسمت قرار خواهد گرفت این یک متن نمونه است
                    </span>
                    <span className="text-left mt-7 font-bold">
                      {product.price} تومان
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>

      <div className="grid md:grid-cols-2 gap-3 container mx-auto my-8 px-2 md:px-0">
        <div>
            <Image className="rounded-2xl h-full" src={gridThirdPic} alt="gridThirdPic" />
        </div>
        <div>
            <Image className="rounded-2xl mb-3" src={gridFirstPic} alt="gridFirstPic" />
            <Image className="rounded-2xl " src={gridSecondPic} alt="gridSecondPic" />
        </div>
      </div>
    </>
  );
};

export default JadidTarinHa;
