import React, { useState, useContext } from 'react';
import { UserContext } from '../context/context'
import { Product } from '../types/Product';
import { Box, BoxProps, Button, Center, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react';
import coin from '~/assets/icons/coin.svg'

interface Props extends BoxProps {
  product: Product,
}

export const ProductCard: React.FC<Props> = ({ product, ...props }) => {
  const [selected, setSelected] = useState<boolean>(false)

  const { state: { user }, actions: { redeem } } = useContext(UserContext)
  const points = user.points
  const canBuy = product.cost <= points

  const handleRedeem = () => {
    if (canBuy) {
      return redeem(product)
    }
  }

  return (
    <Box {...props}
      backgroundColor='white'
      borderRadius='sm'
      boxShadow='md'
      padding={6}
      position='relative'
      cursor={canBuy ? 'pointer': 'not-allowed'}
      opacity={canBuy ? 1 : 0.5}
      onClick={() => setSelected(!selected)}
      >
      <Stack spacing={3} >
        <Stack
          alignItems='center'
          backgroundColor='white'
          borderRadius={9999}
          borderColor={canBuy ? 'primary.500' : 'orange.500'}
          borderWidth={1}
          color={canBuy ? 'primary.500' : 'orange.500'}
          direction='row'
          fontSize='sm'
          fontWeight='500'
          justifyContent='center'
          paddingX={3}
          paddingY={1}
          position='absolute'
          right={6}
          spacing={2}
          top={6}>
          <Text>{canBuy ? product.cost : `Missing ${product.cost - points} points`}</Text>
          <Image src={coin} width={4} height={4} />
        </Stack>
        <Center>
          <Image objectFit='contain' src={product.img.url} width={64} />
        </Center>
        <Divider/>
        <Stack alignItems='flex-start' spacing={0}>
          <Text color='gray.500' fontSize='sm'>{product.category}</Text>
          <Text fontWeight='500'>{product.name}</Text>
        </Stack>
      </Stack>
      { selected && <Flex
                        alignItems='center'
                        borderRadius='sm'
                        height='100%'
                        justifyContent='center'
                        position='absolute'
                        left={0}
                        top={0}
                        width='100%'
                        zIndex={2}>
                        <Box backgroundColor={canBuy ? 'primary.500' : 'gray.500'}
                             borderRadius='sm'
                             height='100%'
                             left={0}
                             opacity={0.9}
                             position='absolute'
                             top={0}
                             width='100%' />
                        <Stack color='white' fontSize='2xl' fontWeight='bold' spacing={6} zIndex={3}>
                          <Stack spacing={0}>
                            <Text>You have: {points}</Text>
                            <Text borderBottomColor='white' borderBottomWidth={2}>Cost: {product.cost}</Text>
                            <Text>Left: {points - product.cost}</Text>
                          </Stack>
                            {canBuy && (
                            <Button color='primary.500' onClick={handleRedeem}>
                              Redeem Now
                            </Button>)}
                        </Stack>
                      </Flex>}
    </Box>
  );
};

