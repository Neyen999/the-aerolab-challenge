import { Center, CircularProgress } from '@chakra-ui/react';
import React, { useState } from 'react';
import { User } from '../types/User';
import { getUserData } from '../api/api'
import { Product } from '../types/Product';

export interface Context {
  state: {
    user: User
  }
  actions: {
    addPoints: () => void,
    redeem: (product: Product) => void
  }
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState<boolean>(true);

  if (!user && loading) {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color='primary.500' />
      </Center>
    )
  }

  React.useEffect(() => {
    try {
      getUserData.then(res => setUser(res.data))
                  .catch(error => console.log(error))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleAddPoints = () => {
    const pointsUrl = 'https://coding-challenge-api.aerolab.co/user/points'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVhYzcxZWNkZWVjMDAwMWEwNThkYzYiLCJpYXQiOjE2NDI3NzYzNTB9.ZNfBbSO62LgcI6iQbH8YuMPV8jyJYhcyfzpg7hyJFMo'
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }

    const postUserPoints = fetch(pointsUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: headers,
      referrerPolicy: 'same-origin',
      body: JSON.stringify({'amount': 1000})
    })
    setUser({...user, points: user.points + 1000})
  }

  const handleRedeem = (product: Product) => {
    if (!user) return
    const redeemUrl = 'https://coding-challenge-api.aerolab.co/redeem'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVhYzcxZWNkZWVjMDAwMWEwNThkYzYiLCJpYXQiOjE2NDI3NzYzNTB9.ZNfBbSO62LgcI6iQbH8YuMPV8jyJYhcyfzpg7hyJFMo'
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }

    const history = fetch(redeemUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: headers,
      referrerPolicy: 'same-origin',
      body: JSON.stringify({'productId': product.id})
    })
    setUser({...user, redeemHistory: [...user.redeemHistory, product.id], points: user.points - product.cost})
  }

  const state: Context['state'] = { user }
  const actions = {
    addPoints: handleAddPoints,
    redeem: handleRedeem
  }

  return (
    <UserContext.Provider value={{state, actions}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
