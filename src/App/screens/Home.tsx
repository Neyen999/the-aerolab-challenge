import { CircularProgress, filter, Flex, Heading, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ProductsList } from '../containers/ProductList';
import { Product } from '../types/Product';
import { getProductsData } from '../api/api';
import header from '~/assets/header.png'
import { getUserHistory } from '../api/api';

export const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    try {
      getProductsData.then(res => {
        setProducts(res.data)
      })
                     .catch(error => console.log(error))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  try {
    getUserHistory.then(res => console.log(res.data))
  } catch (error) {
    console.log(error);
  }

  if (loading) {
    return (
      <Flex
        alignItems='center'
        justifyContent='center'
        paddingY={12}>
        <CircularProgress isIndeterminate color='primary.500'></CircularProgress>
      </Flex>
    )
  }

  return (
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
      <ProductsList products={products} />
    </Stack>
  )
};
