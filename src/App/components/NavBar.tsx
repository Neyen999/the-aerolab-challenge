import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/context';
import { Box, Container, Stack, Image, Text, Button } from '@chakra-ui/react';
import logo from '~/assets/logo.svg'
import coin from '~/assets/icons/coin.svg'

export const NavBar: React.FC = () => {
  const {
    state: { user },
    actions: { addPoints }
  } = useContext(UserContext);

  const [open, setOpen] = useState<boolean>(false)
  const [amount, setAmount] = useState<number>(1000)

  const togglePointsMenu = () => {
    setOpen(!open)
  }

  return (
    user ?
    <Box backgroundColor='white' boxShadow='md'>
    <Container maxWidth='6xl' position="relative">
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
          <Link to='/redeem-history'>
            <Text textDecoration='underline' _hover={{color: 'primary.500'}}>My redeemed products</Text>
          </Link>
          <Text>{user.name}</Text>
          <Stack
            alignItems='center'
            backgroundColor='gray.100'
            borderRadius={9999}
            cursor='pointer'
            direction='row'
            paddingX={3}
            paddingY={2}
            onClick={() => togglePointsMenu()}
            >
            <Text fontWeight='500'>{user.points}</Text>
            <Image
              height={6}
              width={6}
              src={coin} />
          </Stack>
          {
              open &&
              <Stack marginLeft={10} padding={2} borderRadius='md' position='absolute' right='0' bottom='-150px' width='150px' backgroundColor='white'>
                <Box cursor='pointer' display='flex' justifyContent='center' alignItems='center' backgroundColor={`${amount === 1000 ? 'gray.100' : 'white'}`}>
                  <Text onClick={() => setAmount(1000)}>1000</Text>
                  <Image src={coin} height={6} width={6} />
                </Box>
                <Box cursor='pointer' display='flex' justifyContent='center' alignItems='center' backgroundColor={`${amount === 5000 ? 'gray.100' : 'white'}`} >
                <Text onClick={() => setAmount(5000)}>5000</Text>
                  <Image src={coin} height={6} width={6} />
                </Box>
                <Box cursor='pointer' display='flex' justifyContent='center' alignItems='center' backgroundColor={`${amount === 7500 ? 'gray.100' : 'white'}`}>
                  <Text onClick={() => setAmount(7500)}>7500</Text>
                  <Image src={coin} height={6} width={6} />
                </Box>
                <Button onClick={() => addPoints(amount)} color='primary.500'>
                  Add points!
                </Button>
              </Stack>
            }
        </Stack>
      </Stack>
    </Container>
  </Box> : null
  );
};
