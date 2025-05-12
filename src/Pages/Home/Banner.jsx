import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const [BannerImgs, setBannerImgs] = useState([]);

  useEffect(() => {
    fetch("/banner.json") // 👈 Fixed path
      .then((res) => res.json())
      .then((data) => {
        setBannerImgs(data);
      });
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {BannerImgs.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero min-h-screen"
              style={{
                  backgroundImage: `url(${item?.img})`
              }}>
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{item?.title}</h1>
                  <p className="mb-5">
                    {item?.description}
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default Banner;
