import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './App/context/context'
import { Layout } from './App/containers/Layout'
import { Home } from '~/App/screens/Home'
import { NavBar } from './App/components/NavBar'
import { RedeemProducts } from './App/screens/RedeemProducts'
import { NotFound } from './App/screens/NotFound'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import './theme.css'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <UserProvider>
      <Layout>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/redeem-history' element={<RedeemProducts />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </UserProvider>
  </ChakraProvider>,
  document.getElementById('root'),
)
