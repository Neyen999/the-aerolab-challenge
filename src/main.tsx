import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./App/context/context";
import { Layout } from "./App/containers/Layout";
import { Home } from "~/App/screens/Home";
import "./theme.css";
import theme from '../theme'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <UserProvider>
      <Layout>
        <Home />
      </Layout>
    </UserProvider>
  </ChakraProvider>,
  document.getElementById("root"),
);
