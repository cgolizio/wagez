import React, { useState } from 'react';
import { Formik, Field, } from 'formik';
import {
  Input,
  Button,
  Box,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { DateTime } from 'luxon';

import TopDataDisplay from './TopDataDisplay';
import BottomDataDisplay from './BottomDataDisplay';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));;

const TimeForm = () => {
  const [times, setTimes] = useState({
    start: '',
    stop: '',
    hourly: '',
  });
  const [ result, setResult ] = useState({
    timeWorked: [],
    moneyMade: '',
  });

  // let dateStr = DateTime.now().toLocaleString();

  const handleHourly = (hours, min,  hourly) => {
    let perMin, moneyFromMins, moneyFromHours, total;
    perMin = hourly / 60;
    moneyFromMins = min * perMin;
    moneyFromHours = hourly * hours;

    total = (moneyFromHours + moneyFromMins).toString();
    return total;
  };

  const handleDateTime = React.useCallback((values) => {
    const { start, stop, hourly } = values;
    let final, resultObj, resultHours, resultMin;

    let startTime = DateTime.fromISO(start);
    let stopTime = DateTime.fromISO(stop);

    if (stopTime.hour > startTime.hour) {
      resultObj = stopTime.diff(startTime, ['hours', 'minutes']).values;
    } else {
      resultObj = startTime.diff(stopTime, ['hours', 'minutes']).values;
      resultObj.hours = 24 - (resultObj.hours);
      if (startTime.minute < stopTime.minute) {
        resultObj.hours -= 1;
        resultObj.minutes = (stopTime.minute - startTime.minute);
      }
    }
    if (resultObj.minutes === 0) {
      resultHours = resultObj.hours;
      resultMin = null;
    } else {
      resultHours = resultObj.hours;
      resultMin = resultObj.minutes;
    }
    if (!hourly) {
      final = { timeWorked: [ resultHours, resultMin ], moneyMade: null }
    } else {
      final = { timeWorked: [ resultHours, resultMin ], moneyMade: handleHourly(resultHours, resultMin, hourly) };
    }
    console.log('FINAL: ', final, 'RESULT_OBJ: ', resultObj)
    return final;
  }, []);

  // React.useEffect(() => {
  //   console.log('RESULT: ', result, 'TIMES: ', times, 'SHOW: ', show);
  // }, [result, times, show]);
  return (
    <Box bg='#f8f8ff' p={6} rounded='lg'>
      {
        Object.values(times)
          ? <TopDataDisplay times={times} result={result} />
          : null
      }
      <Formik
        initialValues={times}
        onSubmit={async (values) => {
          setTimes({
            start: values.start,
            stop: values.stop,
            hourly: values.hourly,
          })
          await sleep(500);

          await setResult(handleDateTime(values));

          // alert(JSON.stringify(values));
        }}
      >
      {({ handleSubmit, isSubmitting, errors, touched }) => (
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align='flex-start'>
          <FormControl isInvalid={!!errors.start && touched.start}>
            <FormLabel color='#16161D' htmlFor='start'>Clocked-in at: </FormLabel>
            <Field
              as={Input}
              id='start'
              name='start'
              type='time'
              bg='#cbcbcb'
              outline='none'
              color='#16161D'
              _focus={{ color: '#16161D', bg: '#736BFB', outline: 'none' }}
              validate={(value) => {
                let error;
                if (!value.length || value.length !== 5) {
                  error = "Enter a valid 'Clock-In' time"
                }
                return error;
              }}
            />
            <FormErrorMessage>{errors.start}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.stop && touched.stop}>
            <FormLabel color='#16161D' htmlFor='stop'>Clocked-out at: </FormLabel>
            <Field
              as={Input}
              id='stop'
              name='stop'
              type='time'
              bg='#cbcbcb'
              outline='none'
              color='#16161D'
              _focus={{ color: '#16161D', bg: '#736BFB', outline: 'none' }}
              validate={(value) => {
                let error;
                if (!value.length || value.length !== 5) {
                  error = "Enter a valid 'Clock-Out' time"
                }
                return error;
              }}
            />
            <FormErrorMessage>{errors.stop}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel color='#16161D' htmlFor='hourly'>$/hour</FormLabel>
            <Field
              as={Input}
              id='hourly'
              name='hourly'
              type='number'
              bg='#cbcbcb'
              outline='none'
              color='#16161D'
              _focus={{ color: '#16161D', bg: '#736BFB', outline: 'none' }}
            />
          </FormControl>
          <Button
            bg='#736BFB'
            p={25}
            _hover={{ bg: '#16161D' }}
            type='submit'
            disabled={isSubmitting}
            isFullWidth
          >
            Ok, do it.
          </Button>
        </VStack>
        </form>
      )}
      </Formik>
      <BottomDataDisplay result={result} />
      {
        // result.moneyMade
          // ? <BottomDataDisplay result={result} />
          // : null
      }
    </Box>
  );
};

export default TimeForm;