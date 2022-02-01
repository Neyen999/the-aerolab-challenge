import React, { useContext } from 'react';
import { UserContext } from '../context/context';
import { Box, Container, Stack, Image, Text } from '@chakra-ui/react';
import logo from '~/assets/logo.svg'
import coin from '~/assets/icons/coin.svg'
import { Link } from 'react-router-dom';

export const NavBar = () => {

  const {
    state: { user },
    actions: { addPoints }
  } = useContext(UserContext);


  return (
    user ?
    <Box backgroundColor='white' boxShadow='md'>
    <Container maxWidth='6xl'>
      <Stack
        alignItems='center'
        as='nav'
        direction='row'
        justifyContent='space-between'
        paddingY={3}>
        <Link to='/'>
          <Image height={8} width={8} src={logo} />
        </Link>
        <Stack
          alignItems='center'
          color='gray.500'
          direction='row'
          spacing={3}>
          <Link to='/myhistory'>
            <Text>{user.name}</Text>
          </Link>
          <Stack
            alignItems='center'
            backgroundColor='gray.100'
            borderRadius={9999}
            cursor='pointer'
            direction='row'
            paddingX={3}
            paddingY={2}
            onClick={() => addPoints()}
            >
            <Text fontWeight='500'>{user.points}</Text>
            <Image
              height={6}
              width={6}
              src={coin} />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Box> : null
  );
};
