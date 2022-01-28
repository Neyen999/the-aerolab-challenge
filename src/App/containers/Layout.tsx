import React from 'react';
import { NavBar } from '../components/NavBar';
import { Center, Container, Flex } from '@chakra-ui/react'

export const Layout: React.FC = ({ children }) => {
  return (
    <Flex
      direction="column"
      backgroundColor="gray.100"
      flex={1}>
      <NavBar />
      <Center paddingY={6}>
        <Container maxWidth="6xl">
          {children}
        </Container>
      </Center>
    </Flex>
  );
};
