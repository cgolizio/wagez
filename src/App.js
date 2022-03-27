import React from "react";
import { ChakraProvider, CSSReset, Flex } from "@chakra-ui/react";

import { customTheme } from "./styles/theme";
import TimeForm from "./components/TimeForm";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Flex align='center' justify='center' h='100vh'>
        <TimeForm />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
