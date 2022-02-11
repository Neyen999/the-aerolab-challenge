import React from 'react'
import { Heading, Image } from '@chakra-ui/react'
import apiError from '~/assets/apiError.png'

export const ApiError: React.FC = () => {
  return (
    <>
      <Heading fontSize='3xl' paddingY={2} color='gray.500'>It seems there was an error, try again later.</Heading>
      <Image src={apiError} width='500px' height='500px' margin='0 auto'/>
    </>
  )
}
