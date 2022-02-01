import { Divider, Flex, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Product } from '../types/Product';
import { Filter } from '../types/Product'
import { Count } from '../components/Count'
import { Filters } from '../components/Filters'
import { Pagination } from '../components/Pagination';
import { Grid } from '../components/Grid'

interface Props {
  products: Product[],
  totalProducts: number,
  setCurrentPage : (number: number) => void,
  currentPage: number
}



export const ProductsList: React.FC<Props> = ({ products, totalProducts, currentPage, setCurrentPage }) => {

  const [filter, setFilter] = useState<Filter>(Filter.MostRecent)

  const filters = {
    'Highest Price': [...products].sort((a, b) => b.cost - a.cost),
    'Lowest Price': [...products].sort((a, b) => a.cost - b.cost),
    'Most Recent': products
  }

  const filteredProducts = React.useMemo(() => {
    return filters[filter]
  }, [filter, products])

  const paginate = (number: number) => setCurrentPage(number)

  return (
    <Stack alignItems='flex-start' spacing={6}>
      <Stack
        alignItems='center' as='nav'
        flexDirection='row'
        flex={1}
        spacing={6}
        width='100%'
        divider={<Divider borderColor='gray.300' height={12} orientation='vertical' />}>
          <Count current={currentPage * filteredProducts.length} total={totalProducts}/>
          <Filters active={filter} onChange={setFilter}/>
          <Pagination paginate={paginate}/>
      </Stack>
      <Grid products={filteredProducts} />
      <Flex justifyContent='space-between' width='100%'>
        <Count current={currentPage * filteredProducts.length} total={totalProducts}/>
        <Pagination paginate={paginate}/>
      </Flex>
    </Stack>
  )
};
