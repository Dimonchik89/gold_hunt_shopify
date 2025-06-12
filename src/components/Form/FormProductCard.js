import React from 'react';

const FormProductCard = ({ product, handleChangeSelectedColor }) => {
  return (
    <form className="flex wrap gap-6">
      {product.options.map(({ name, values }) => {
        return (
          <div key={name} className="flex items-center gap-4">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              {name.toUpperCase()}
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => handleChangeSelectedColor(e.target.value)}
            >
              {values.map((item) => (
                <option key={`${name}-${item}`} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </form>
  );
};

export default FormProductCard;
