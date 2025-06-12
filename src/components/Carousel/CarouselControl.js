import React from 'react';
import {
  slidesPerViewButtons,
  showPaginationButtons,
  showNavigationButtons,
  paddingButtons,
} from '@/constants';
import CarouselButtonGroup from './CarouselButtonGroup';

const CarouselControl = ({ handleChangeSwiperOptions }) => {
  return (
    <div className="my-5 grid gird-cols-1 lg:grid-cols-2 gap-3">
      <div className="hidden md:block">
        <CarouselButtonGroup
          data={slidesPerViewButtons}
          handleClick={handleChangeSwiperOptions}
          objectKey={'slidesPerView'}
          title="Slides"
        />
      </div>

      <CarouselButtonGroup
        data={showPaginationButtons}
        handleClick={handleChangeSwiperOptions}
        objectKey={'pagination'}
        title="Pagination"
      />
      <CarouselButtonGroup
        data={showNavigationButtons}
        handleClick={handleChangeSwiperOptions}
        objectKey={'navigation'}
        title="Navigation"
      />
      <div className="hidden md:block">
        <CarouselButtonGroup
          data={paddingButtons}
          handleClick={handleChangeSwiperOptions}
          objectKey={'padding'}
          title="Padding"
        />
      </div>
    </div>
  );
};

export default CarouselControl;
