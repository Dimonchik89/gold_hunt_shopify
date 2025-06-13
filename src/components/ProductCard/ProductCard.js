'use client';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import FormProductCard from '../Form/FormProductCard';
import AccordionCustom from '../Accordion/Accordion';

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.options[0].values[0]);

  const accordionContent = [product?.careGuide, product?.subtitle];

  const selectedVariant = product.variants.find((item) => item.title === selectedColor);

  const handleChangeSelectedColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="group block">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-[0_0_60%]">
          <Image
            priority
            src={selectedVariant.image.src}
            alt={product.handle}
            width="640"
            height="480"
            className="object-cover h-[320px] md:h-[480px]"
          />
        </div>

        <div className="mt-1.5 flex flex-col gap-5">
          <p className="text-2xl text-gray-500">{product.title}</p>

          <div className="mt-1.5 flex gap-1">
            <FormProductCard
              product={product}
              handleChangeSelectedColor={handleChangeSelectedColor}
            />
          </div>

          <div className="mt-3 flex flex-col flex-auto gap-5 justify-center text-xl flex-auto">
            <h3 className="text-gray-900">{product.description}</h3>

            <p className="text-gray-900">
              <span className="text-xl color-black font-bold mr-2">Price:</span>
              {selectedVariant.price.amount} {product.variants[0].price.currencyCode}
            </p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            {accordionContent.map(({ key, value }) => (
              <AccordionCustom key={`${key}-${value}`} title={key} value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
