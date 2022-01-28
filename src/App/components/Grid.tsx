import React, { useState } from 'react';
import { Product } from '../types/Product';
import { Grid as ChackraGrid } from '@chakra-ui/react'
import { ProductCard } from '../components/ProductCard'

interface Props {
  products: Product[]
}

export const Grid: React.FC<Props> = ({ products }) => {

  const [selected, setSelected] = useState<Product['id'] | null>(null)

  return (
    <ChackraGrid gap={6} templateColumns='repeat(auto-fill, minmax(256px, 1fr))' width='100%'>
      {
        products.map(product => <ProductCard key={`product-${product._id}`} product={product} isSelected={selected === product.id} onClick={() => setSelected(product.id)}/>)
      }
    </ChackraGrid>
  );
};
