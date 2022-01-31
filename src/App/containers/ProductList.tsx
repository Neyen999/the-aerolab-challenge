import { Divider, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Product } from '../types/Product';
import { Filter } from '../types/Product'
import { Count } from '../components/Count'
import { Filters } from '../components/Filters'
import { Grid } from '../components/Grid'

interface Props {
  products: Product[]
}



export const ProductsList: React.FC<Props> = ({ products }) => {

  const [filter, setFilter] = useState<Filter>(Filter.MostRecent)

  const filters = {
    'Highest Price': [...products].sort((a, b) => b.cost - a.cost),
    'Lowest Price': [...products].sort((a, b) => a.cost - b.cost),
    'Most Recent': products
  }

  const filteredProducts = React.useMemo(() => {
    return filters[filter]
  }, [filter, products])

  return (
    <Stack alignItems='flex-start' spacing={6}>
      <Stack
        alignItems='center' as='nav'
        flexDirection='row'
        flex={1}
        spacing={6}
        width='100%'
        divider={<Divider borderColor='gray.300' height={12} orientation='vertical' />}>
          <Count current={filteredProducts.length} total={products.length}/>
          <Filters active={filter} onChange={setFilter}/>
      </Stack>
      <Grid products={filteredProducts} />
      <Count current={filteredProducts.length} total={products.length}/>
    </Stack>
  )
};
