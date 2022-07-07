import React, { useContext } from 'react';
import { Box, Button, Center } from "@chakra-ui/react"

import { MainContext } from 'App';

const ResetButton = () => {
  const { handleReset } = useContext(MainContext);
  return (
    <Center>
      <Box
        pos='absolute'
        bottom={75}
      >
        <Button
          color='#16161D'
          size='lg'
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
    </Center>
  )
}

export default ResetButton