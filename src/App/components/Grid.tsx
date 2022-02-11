import React from 'react';
import { Product } from '../types/Product';
import { Grid as ChackraGrid } from '@chakra-ui/react'
import { ProductCard } from '../components/ProductCard'

interface Props {
  products: Product[]
}

export const Grid: React.FC<Props> = ({ products }) => {
  return (
    <ChackraGrid marginTop={2} gap={6} templateColumns='repeat(auto-fill, minmax(256px, 1fr))' width='100%'>
      {
        products.map(product => <ProductCard key={`product-${product._id}`} product={product} />)
      }
    </ChackraGrid>
  );
};
