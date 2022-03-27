import { Box, Button, Center } from "@chakra-ui/react"

const ResetButton = ({ handleReset }) => {
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