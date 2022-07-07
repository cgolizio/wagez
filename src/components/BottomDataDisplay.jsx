import React, { useContext } from 'react';
import { Box, Flex, VStack, Heading } from '@chakra-ui/react';

import { MainContext } from 'App';

const BottomDataDisplay = () => {
  const { result, formatTimeWorked, formatMoneyMade } = useContext(MainContext);
  const { timeWorked, moneyMade } = result;
  return (
    <Box
      pos='absolute'
      bottom={0}
      left={0}
      w='100%'
      h='40rem'
    >
      <Flex
        h='100%'
        align='flex-start'
        justify='center'
        padding='3rem'
      >
        <VStack>
          {
            timeWorked.length &&
              (<Heading color='#717171'>
                You worked:
              </Heading>)
          }
          {
            timeWorked &&
              (<Heading color='#16161D' fontSize='8xl'>
                {formatTimeWorked(timeWorked)}
              </Heading>)
          }

          {
            moneyMade &&
              (<Heading color='#717171'>
                and made:
              </Heading>)
          }
          {
            moneyMade &&
              (<Heading color='#00AD07' fontSize='8xl'>
                {formatMoneyMade(moneyMade)}
              </Heading>)
          }
        </VStack>
      </Flex>
    </Box>
  )
}

export default BottomDataDisplay;