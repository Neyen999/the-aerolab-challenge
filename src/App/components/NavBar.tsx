import React, { useState, useEffect } from 'react';
import { Box, Container, Stack, Image, Text } from '@chakra-ui/react';
import logo from "~/assets/logo.svg"
import coin from "~/assets/icons/coin.svg"
import { useGetUserData } from '../hooks/useGetUserData';

export const NavBar = () => {

  const { user, setUser } = useGetUserData()
  useGetUserData()

  return (
    user ?
    <Box backgroundColor="white" boxShadow="md">
    <Container maxWidth="6xl">
      <Stack
        alignItems="center"
        as="nav"
        direction="row"
        justifyContent="space-between"
        paddingY={3}>
        <Image height={8} width={8} src={logo} />
        <Stack
          alignItems="center"
          color="gray.500"
          direction="row"
          spacing={3}>
          <Text>{user.name}</Text>
          <Stack
            alignItems="center"
            backgroundColor="gray.100"
            borderRadius={9999}
            cursor="pointer"
            direction="row"
            paddingX={3}
            paddingY={2}
            onClick={() => {
              const pointsUrl = "https://coding-challenge-api.aerolab.co/user/points"
              const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVhYzcxZWNkZWVjMDAwMWEwNThkYzYiLCJpYXQiOjE2NDI3NzYzNTB9.ZNfBbSO62LgcI6iQbH8YuMPV8jyJYhcyfzpg7hyJFMo"
              const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
              }

              let cantidad = {
                'amount': 1000
              }

              const postUserPoints = fetch(pointsUrl, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: headers,
                referrerPolicy: 'same-origin',
                body: JSON.stringify(cantidad)
              })
              setUser({...user, points: user.points + cantidad.amount})
            }}
            >
            <Text fontWeight="500">{user.points}</Text>
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
