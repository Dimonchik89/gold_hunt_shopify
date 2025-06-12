import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CarouselItem = ({ handle, title, variants }) => {
  return (
    <div className="card mx-auto">
      <Link href={handle}>
        <div className="image_container">
          <Image
            priority
            src={variants[0].image.src}
            alt={title}
            width={320}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="title">
          <span>{title}</span>
        </div>

        <div className="action">
          <div className="price flex gap-2">
            <span>{variants[0].price.amount}</span>
            <span>{variants[0].price.currencyCode}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarouselItem;
