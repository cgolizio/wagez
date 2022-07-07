import React, { useState, createContext } from "react";
import { ChakraProvider, CSSReset, Flex } from "@chakra-ui/react";

import { customTheme } from "./styles/theme";
import Form from "./components/Form";
import {
  initialTimes,
  initialResult,
  sleep,
  handleHourly,
  formComponentData,
  handleDateTime,
} from "helpers";
import {
  formatTimeWorked,
  formatMoneyMade,
  formatTime,
} from "helpers/displayHelpers";

// @ts-ignore
export const MainContext = createContext();

function App() {
  const [times, setTimes] = useState(initialTimes);
  const [result, setResult] = useState(initialResult);

  const handleReset = () => {
    setTimes(initialTimes);
    setResult(initialResult);
  };

  const handleFormikSubmit = async (values) => {
    setTimes({
      start: values.start,
      stop: values.stop,
      hourly: values.hourly,
    });
    await sleep(500);

    await setResult(handleDateTime(values));
  };

  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Flex align='center' justify='center' h='100vh'>
        <MainContext.Provider
          value={{
            times,
            setTimes,
            result,
            setResult,
            initialTimes,
            initialResult,
            sleep,
            handleHourly,
            formComponentData,
            handleDateTime,
            handleReset,
            handleFormikSubmit,
            formatTimeWorked,
            formatMoneyMade,
            formatTime,
          }}
        >
          <Form />
        </MainContext.Provider>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
