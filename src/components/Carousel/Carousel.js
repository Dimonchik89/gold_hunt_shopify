'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CarouselItem from './CarouselItem';
import CarouselControl from './CarouselControl';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = ({ products }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [swiperOptions, setSwiperOptions] = useState({
    slidesPerView: 5,
    pagination: true,
    navigation: true,
    padding: 10,
  });

  const handleChangeSwiperOptions = (key, value) => {
    setSwiperOptions((prev) => ({ ...prev, [key]: value }));
  };

  const breakpoints = {
    loop: true,
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: swiperOptions.padding,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: swiperOptions.padding,
    },
    1024: {
      slidesPerView: swiperOptions.slidesPerView >= 4 ? 4 : swiperOptions.slidesPerView,
      spaceBetween: swiperOptions.padding,
    },
    1280: {
      slidesPerView: swiperOptions.slidesPerView,
      spaceBetween: swiperOptions.padding,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setShowCarousel(true);
    }, 50);
  }, []);

  return (
    <div>
      {showCarousel && (
        <>
          <CarouselControl handleChangeSwiperOptions={handleChangeSwiperOptions} />

          <Swiper
            key={`${swiperOptions.slidesPerView}-${swiperOptions.pagination}-${swiperOptions.navigation}-${swiperOptions.padding}`}
            modules={[Navigation, Pagination]}
            pagination={swiperOptions.pagination ? { clickable: true } : false}
            navigation={swiperOptions.navigation}
            breakpoints={breakpoints}
          >
            {products.map(({ id, ...rest }) => (
              <SwiperSlide key={id}>
                <CarouselItem {...rest} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
      {/* <CarouselControl handleChangeSwiperOptions={handleChangeSwiperOptions} />

      <Swiper
        key={`${swiperOptions.slidesPerView}-${swiperOptions.pagination}-${swiperOptions.navigation}-${swiperOptions.padding}`}
        modules={[Navigation, Pagination]}
        pagination={swiperOptions.pagination ? { clickable: true } : false}
        navigation={swiperOptions.navigation}
        breakpoints={breakpoints}
      >
        {products.map(({ id, ...rest }) => (
          <SwiperSlide key={id}>
            <CarouselItem {...rest} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default Carousel;
