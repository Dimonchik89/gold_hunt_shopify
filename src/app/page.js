import Carousel from '@/components/Carousel/Carousel';
import Container from '@/components/Container/Container';
import { getProducts } from '@/lib/shopify';
import { Suspense, lazy } from 'react';

export default async function Home() {
  const defaultSort = {
    title: 'Relevance',
    slug: null,
    sortKey: 'RELEVANCE',
    reverse: false,
  };

  const products = await getProducts({
    sortKey: defaultSort.sortKey,
    reverse: defaultSort.reverse,
    query: '',
  });

  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 1000);
  });

  return (
    <Container>
      <div className="my-10 overflow-x-hidden">
        <Suspense fallback={<p>Loading...</p>}>
          <Carousel products={products} />
        </Suspense>
      </div>
    </Container>
  );
}
