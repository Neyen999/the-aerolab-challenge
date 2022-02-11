import React, { useEffect, useState } from 'react'
import { ProductsList } from '../containers/ProductList'
import { Product } from '../types/Product'
import { ApiError } from '../components/ApiError'
import { getProductsData } from '../api/getData'
import { CircularProgress, Flex, Heading, Stack } from '@chakra-ui/react'
import banner from '~/assets/banner.png'

export const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [productsPerPage] = useState<number>(16)
  const indexOfLastProd: number = currentPage * productsPerPage
  const indexOfFirstProd: number = indexOfLastProd - productsPerPage
  const currentProducts: Product[] = products.slice(indexOfFirstProd, indexOfLastProd)

  useEffect(() => {
    setTimeout(() => {
      getProductsData.then(res => {
        setProducts(res.data)
        setLoading(false)
      }).catch(error => {
        setLoading(false)
        setError(true)
      })
    }, 1000)
  }, [])

  return (
    <>
      {
        loading &&
          <Flex
            alignItems='center'
            justifyContent='center'
            paddingY={12}>
            <CircularProgress isIndeterminate color='primary.500'></CircularProgress>
          </Flex>
      }
      {
        !loading && !error &&
          <Stack flex={1} spacing={6}>
            <Flex
              alignItems='flex-end'
              backgroundImage={`url(${banner})`}
              backgroundSize='cover'
              borderRadius='md'
              justifyContent='flex-start'
              minHeight={64}
              padding={6}>
              <Heading color='white' fontSize='4xl'>Electronics</Heading>
            </Flex>
            <ProductsList products={currentProducts} totalProducts={products.length} currentPage={currentPage} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage}/>
          </Stack>
      }
      {
        !loading && error &&
        <ApiError />
      }
    </>
  )
}
