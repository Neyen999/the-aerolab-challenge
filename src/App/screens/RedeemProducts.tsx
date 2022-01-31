import React, { useEffect, useState } from 'react';
import { getUserHistory } from '../api/api';
import { Product } from '../types/Product';
import { Grid } from '../components/Grid';
import { Heading } from '@chakra-ui/react';

export const RedeemProducts = () => {

  const [reProducts, setReProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      getUserHistory.then(res => setReProducts(res.data))
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    reProducts
    ?
    <>
      <Heading paddingY={2} color='gray.500' fontSize='4xl'>Your redeemed products</Heading>
      <Grid products={reProducts}/>
    </>
    : <h2>You have no current products</h2>
  );
};
