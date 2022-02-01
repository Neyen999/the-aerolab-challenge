import { Flex } from '@chakra-ui/react';
import React from 'react';
import { BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill } from 'react-icons/bs'

interface Props {
  paginate: (number: number) => void
}

export const Pagination: React.FC<Props> = ({ paginate }) => {
  return (
  <Flex fontSize='4xl' justifyContent='flex-end' flex={1} paddingX={6}>
    <BsFillArrowLeftCircleFill style={{margin: '0 5px'}} onClick={() => paginate(1)}/>
    <BsFillArrowRightCircleFill style={{margin: '0 5px'}} onClick={() => paginate(2)}/>
  </Flex>
  )
};
