import imageFragment from './image';
import seoFragment from './seo';

export const productFragment = `
    fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
	subtitle: metafield(namespace: "descriptors", key: "subtitle") {
		namespace
          key
      value
      type
    }

    careGuide: metafield(namespace: "descriptors", key: "care_guide") {
		namespace
          key
      value
      type
    }
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
		  image {
			src
		  }
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
    }
    ${imageFragment}
    ${seoFragment}
`;
