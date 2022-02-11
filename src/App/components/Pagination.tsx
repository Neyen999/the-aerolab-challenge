import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill } from 'react-icons/bs'

interface Props {
  currentPage: number,
  totalPages: number,
  paginate: (number: number) => void
}

export const Pagination: React.FC<Props> = ({ currentPage, totalPages, paginate }) => {
  return (
  <Flex fontSize='4xl' justifyContent='flex-end' flex={1} paddingX={6}>
    <Button fontSize="4xl" paddingX={0} disabled={currentPage > 1 ? false : true} onClick={() => paginate(currentPage - 1)}><BsFillArrowLeftCircleFill style={{margin: '0 5px'}}/></Button>
    <Button fontSize="4xl" paddingX={0} disabled={currentPage < totalPages ? false: true} onClick={() => paginate(currentPage + 1)}><BsFillArrowRightCircleFill style={{margin: '0 5px'}}/></Button>
  </Flex>
  )
};
