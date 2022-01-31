import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./App/context/context";
import { Layout } from "./App/containers/Layout";
import { Home } from "~/App/screens/Home";
import "./theme.css";
import theme from '../theme'
import { RedeemProducts } from "./App/screens/RedeemProducts";
import { NavBar } from "./App/components/NavBar";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <UserProvider>
      <Layout>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/myhistory' element={<RedeemProducts />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </UserProvider>
  </ChakraProvider>,
  document.getElementById("root"),
);
