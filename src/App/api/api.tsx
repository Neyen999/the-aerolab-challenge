import axios from 'axios'

const userUrl = 'https://coding-challenge-api.aerolab.co/user/me'

const productsUrl = 'https://coding-challenge-api.aerolab.co/products'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVhYzcxZWNkZWVjMDAwMWEwNThkYzYiLCJpYXQiOjE2NDI3NzYzNTB9.ZNfBbSO62LgcI6iQbH8YuMPV8jyJYhcyfzpg7hyJFMo'

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': token
}


export const getUserData = axios.get(userUrl, {headers});
export const getProductsData = axios.get(productsUrl, {headers});
