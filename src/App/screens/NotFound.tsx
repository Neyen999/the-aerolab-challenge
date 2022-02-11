import React from 'react'
import { Image } from '@chakra-ui/react'
import notFound from '~/assets/notFound.png'

export const NotFound: React.FC = () => {
  return (
    <Image margin="0 auto" height="500px" width="500px" src={notFound} alt="Error, page not found" />
  )
}
