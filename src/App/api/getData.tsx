import axios from 'axios'

const userUrl = 'https://coding-challenge-api.aerolab.co/user/me'

const productsUrl = 'https://coding-challenge-api.aerolab.co/products'

const historyUrl = 'https://coding-challenge-api.aerolab.co/user/history'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1YTdjNTkzZWE4NDAwMjFkMGRhZjEiLCJpYXQiOjE2NDQ1Mzc3OTd9.6OIJdhttD0IY0LwYkkDG53gjpnryKHIgG-LiR4ieur4'

export const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': token
}

export const getUserData = axios.get(userUrl, {headers})
export const getProductsData = axios.get(productsUrl, {headers})
export const getUserHistory = axios.get(historyUrl, {headers})
