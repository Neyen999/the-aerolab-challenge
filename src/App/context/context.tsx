import { Center, CircularProgress } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { User } from '../types/User'
import { getUserData } from '../api/getData'
import { headers } from '../api/getData'
import { Product } from '../types/Product'

export interface Context {
  state: {
    user: User
  }
  actions: {
    addPoints: (amount: number) => void,
    redeem: (product: Product) => void
  }
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState<boolean>(true)

  if (!user && loading) {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color='primary.500' />
      </Center>
    )
  }

  useEffect(() => {
    try {
      getUserData.then(res => setUser(res.data))
                  .catch(error => console.log(error))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleAddPoints = (amount: number) => {
    const pointsUrl = 'https://coding-challenge-api.aerolab.co/user/points'

    fetch(pointsUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: headers,
      referrerPolicy: 'same-origin',
      body: JSON.stringify({'amount': amount})
    })
    setUser({...user, points: user.points + amount})
  }

  const handleRedeem = (product: Product) => {
    if (!user) return
    const redeemUrl = 'https://coding-challenge-api.aerolab.co/redeem'

    var requestBody = {
      'productId': product._id
    }

    fetch(redeemUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: headers,
      referrerPolicy: 'same-origin',
      body: JSON.stringify(requestBody)
    })
    setUser({...user, redeemHistory: [...user.redeemHistory, product._id], points: user.points - product.cost})
  }

  const state: Context['state'] = { user }
  const actions = {
    addPoints: (amount: number) => handleAddPoints(amount),
    redeem: handleRedeem
  }

  return (
    <UserContext.Provider value={{state, actions}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
