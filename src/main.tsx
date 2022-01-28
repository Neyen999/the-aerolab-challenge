import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "~/App/screens/App";
import { Layout } from "./App/containers/Layout";
import "./theme.css";

ReactDOM.render(
  <ChakraProvider>
    <Layout>
      <App />
    </Layout>
  </ChakraProvider>,
  document.getElementById("root"),
);
