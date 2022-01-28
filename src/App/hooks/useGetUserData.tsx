import { useState, useEffect } from 'react'
import { User } from '../types/User'
import { getUserData } from '../api/api'

export const useGetUserData = () => {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {

    try {
      getUserData.then(res => {
        setUser(res.data)
      }).catch(error => console.log(error))
    } catch (err) {
      console.log(err)
    }
  }, [])

  return { user, setUser }
}
