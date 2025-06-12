import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <div className="bg-gray-400 py-5 flex justify-center text-xl font-bold">
      <Link href="/">Home</Link>
    </div>
  );
};
