import React from 'react';
import { Center, Container, Flex } from '@chakra-ui/react'

export const Layout: React.FC = ({ children }) => {
  return (
    <Flex
      direction='column'
      backgroundColor='gray.100'
      flex={1}>
      <Center paddingY={3}>
        <Container maxWidth='6xl'>
          {children}
        </Container>
      </Center>
    </Flex>
  );
};
