import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../types/Product'
import { Grid } from '../components/Grid'
import { getUserHistory } from '../api/getData'
import { Center, CircularProgress, Heading } from '@chakra-ui/react'
import { ApiError } from '../components/ApiError'

export const RedeemProducts = () => {
  const [redeemedProducts, setRedeemedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getUserHistory.then(res => {
        setRedeemedProducts(res.data)
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
        loading && !redeemedProducts.length &&
          <Center padding={12}>
            <CircularProgress isIndeterminate color='primary.500' />
          </Center>
      }
      {
        !loading && !redeemedProducts.length &&
        <>
          <Heading paddingY={2} color='gray.500' fontSize='4xl'>You dont have any redeemed product</Heading>
          <Link to="/" style={{textDecoration: 'underline', color: 'red'}}>Add some</Link>
        </>
      }
      {
        !loading && redeemedProducts.length > 0 &&
        <>
          <Heading paddingY={2} color='gray.500' fontSize='4xl'>Your redeemed products</Heading>
          <Grid products={redeemedProducts}/>
        </>
      }
      {
        !loading && error &&
        <ApiError/>
      }
    </>
  )
};
