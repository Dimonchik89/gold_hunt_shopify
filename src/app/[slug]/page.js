import Container from '@/components/Container/Container';
import ProductCard from '@/components/ProductCard/ProductCard';
import { getProduct } from '@/lib/shopify';
import React from 'react';

const page = async ({ params }) => {
  const { slug } = await params;

  const product = await getProduct(slug);
  console.log(product);

  return (
    <Container>
      <div className="my-10 overflow-x-hidden">
        <ProductCard product={product} />
      </div>
    </Container>
  );
};

export default page;
