import React from 'react';
import { Box, Flex, VStack, Heading } from '@chakra-ui/react';

const TopDataDisplay = ({ times }) => {
  const { start, stop, hourly } = times;

  const formatTime = time => {
    let timeArr = time.split(':').map(num => Number(num));
    let hours = timeArr[0];
    let minutes = timeArr[1];
    let dayOrNight;
    let result;
    if (hours > 12) {
      hours = hours - 12;
      dayOrNight = 'PM';
    } else {
      dayOrNight = 'AM';
    }
    if (minutes === 0) {
      minutes = '00';
    } else if (minutes.toString().length < 2) {
      minutes = `0${minutes}`;
    }
    result = `${hours}:${minutes} ${dayOrNight}`;
    return result;
  };

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