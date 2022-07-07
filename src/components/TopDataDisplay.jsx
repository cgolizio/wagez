import React, { useContext } from 'react';
import { Box, Flex, VStack, Heading } from '@chakra-ui/react';

import { MainContext } from 'App';

const TopDataDisplay = () => {
  const { times, formatTime } = useContext(MainContext);
  const { start, stop, hourly } = times;

  return (
    <Box
      pos='absolute'
      top={0}
      left={0}
      w='100%'
      h='40rem'
    >
      <Flex
        h='100%'
        align='flex-end'
        justify='center'
        padding='5rem'
      >
        <VStack>
          { start && (
            <Heading color='#717171'>
              Clocked-in:
            </Heading>
            )
          }
          <Heading
            color='#16161D'
            fontSize='7xl'
          >
            { start && formatTime(start) }
          </Heading>
          { stop && (
            <Heading color='#717171'>
              Clocked-out:
            </Heading>
            )
          }
          <Heading
            color='#16161D'
            fontSize='7xl'
          >
            { stop && formatTime(stop) }
          </Heading>
          { hourly && (
            <Heading color='#717171'>
              Pay rate:
            </Heading>
            )
          }
          <Heading
            color='#16161D'
            fontSize='7xl'
          >
            { hourly && `$${hourly}/hour` }
          </Heading>
        </VStack>
      </Flex>
    </Box>
  )
}

export default TopDataDisplay;