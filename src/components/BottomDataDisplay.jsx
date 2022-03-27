import React from 'react';
import { Box, Flex, VStack, Heading } from '@chakra-ui/react';

const BottomDataDisplay = ({ result }) => {
  const { timeWorked, moneyMade } = result;

  const formatTimeWorked = React.useCallback(timeArr => {
    let hours, minutes, finalTime;
    hours = timeArr[0];
    minutes = timeArr[1];
    finalTime = minutes ? `${hours} hours + ${minutes} min.` : hours ? `${hours} hours.` : null
    return finalTime;
  }, []);

  const formatMoneyMade = React.useCallback(amount => {
    let result, decimals;
    amount = Math.abs(amount).toFixed(2);
      amount.length === 4
        ? result = `$${amount}0`
        : result = `$${amount}`;
    decimals = result.split('.')[1];
    return decimals === '00' ? result.split('.')[0] : result;
  }, []);

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
                You made:
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