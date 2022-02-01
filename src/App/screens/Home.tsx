import { CircularProgress, Flex, Heading, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ProductsList } from '../containers/ProductList';
import { Product } from '../types/Product';
import { getProductsData } from '../api/api';
import header from '~/assets/header.png'

export const Home: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(16);
  const [loading, setLoading] = useState<boolean>(true);

  // Get currents posts

  const indexOfLastProd = currentPage * productsPerPage
  const indexOfFirstProd = indexOfLastProd - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProd, indexOfLastProd)

  useEffect(() => {
    try {
      setTimeout(() => {
        getProductsData.then(res => {
          setProducts(res.data)
          setLoading(false)
        }).catch(error => console.log(error))
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  }, [])



  return (
    loading ?
    <Flex
      alignItems='center'
      justifyContent='center'
      paddingY={12}>
      <CircularProgress isIndeterminate color='primary.500'></CircularProgress>
    </Flex> :
    <Stack flex={1} spacing={6}>
      <Flex
        alignItems='flex-end'
        backgroundImage={`url(${header})`}
        backgroundSize='cover'
        borderRadius='md'
        justifyContent='flex-start'
        minHeight={64}
        padding={6}>
        <Heading color='white' fontSize='4xl'>Electronics</Heading>
      </Flex>
      <ProductsList products={currentProducts} totalProducts={products.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Stack>
  )
};
