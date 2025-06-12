import { SHOPIFY_GRAPHQL_API_ENDPOINT } from '../contsnts';
import { getProductQuery, getProductsQuery } from './query/product';

// const domain =  process.env.SHOPIFY_STORE_DOMAIN.startsWith("https://") ? process.env.SHOPIFY_STORE_DOMAIN : `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}`;
const domain = `https://${process.env.SHOPIFY_STORE_DOMAIN}`;

const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;

export async function shopifyFetch({
  cache = 'force-cache',
  headers = {},
  query,
  tags,
  variables,
}) {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags & { next: { tags } }),
    });

    const body = await result.json();

    if (body.errors) {
      throw new Error(body.errors[0]);
    }

    return {
      status: result.status,
      body,
    };
  } catch (error) {
    throw {
      error,
      query,
    };
  }
}

export async function getProducts({ query, reverse, sortKey }) {
  const res = await shopifyFetch({
    query: getProductsQuery,
    tags: ['products'],
    variables: {
      query,
      reverse,
      sortKey,
    },
  });

  return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}

export async function getProduct(handle) {
  const res = await shopifyFetch({
    query: getProductQuery,
    tags: ['product', handle],
    variables: {
      handle,
    },
  });

  return reshapeProduct(res.body.data.product, false);
}

function reshapeImages(images, productTitle) {
  const flattened = removeEdgesAndNodes(images);

  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)?.[1];

    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`,
    };
  });
}

function reshapeProduct(product) {
  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants),
  };
}

function reshapeProducts(products) {
  const reshapeProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapeProducts.push(reshapedProduct);
      }
    }
  }

  return reshapeProducts;
}

function removeEdgesAndNodes(array) {
  return array.edges.map((edge) => edge?.node);
}
