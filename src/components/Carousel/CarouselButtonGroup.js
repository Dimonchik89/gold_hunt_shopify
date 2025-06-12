import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';

const CarouselButtonGroup = ({ data, handleClick, objectKey, title }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <h2 className="text-sm md:text-xl flex-[0_0_20%]">{title}: </h2>
      <div className="flex gap-2 flex-auto flex-wrap">
        {data.map(({ text, value }) => (
          <Button
            key={uuidv4()}
            text={text}
            value={value}
            objectKey={objectKey}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselButtonGroup;
