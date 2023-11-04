import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PhotosGallery = ({ product }) => {
  console.log(product);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="w-[85%] my-[70px] px-10 mx-auto">
          <h3 className="font-semibold text-3xl text-black capitalize mb-8">
            Photos Gallery
          </h3>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // navigation={true}
          >
            {product?.business_profile_images.map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-52 border border-gray-200 shadow-sm rounded-md">
                    <div className="w-full object-cover rounded-md">
                      <img
                        src={items}
                        alt=""
                        className="w-full h-full rounded-md"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default PhotosGallery;
