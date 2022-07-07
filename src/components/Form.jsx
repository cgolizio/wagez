import React, { useContext } from 'react';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { Formik } from 'formik';

import BottomDataDisplay from './BottomDataDisplay';
import InputComponent from './InputComponent';
import ResetButton from './ResetButton';
import TopDataDisplay from './TopDataDisplay';

import { MainContext } from 'App';

const Form = () => {
  const {
    times,
    formComponentData,
    handleFormikSubmit
  } = useContext(MainContext);

  return (
    <Box bg='rgba(248, 248, 255, 0.7)' p={6} rounded='lg' backdropBlur='20%'>
      {Object.values(times) && <TopDataDisplay />}
      <Formik
        initialValues={times}
        onSubmit={handleFormikSubmit}
      >
      {({ handleSubmit, isSubmitting, errors, touched }) => (
      <form onSubmit={handleSubmit}>
        <Flex
          flexDir='column'
          align='flex-start'
          justify='space-between'
          h='20rem'
        >
          <InputComponent
            errors={errors}
            touched={touched}
            data={formComponentData.start}
          />
          <Spacer />
          <InputComponent
            errors={errors}
            touched={touched}
            data={formComponentData.stop}
          />
          <Spacer />
          <InputComponent
            errors={errors}
            touched={touched}
            data={formComponentData.hourly}
          />
          <Spacer />
          <Button
            bg='#736BFB'
            p={25}
            _hover={{ bg: '#16161D' }}
            type='submit'
            disabled={isSubmitting}
            isFullWidth
          >
            Do Math.
          </Button>
        </Flex>
      </form>
      )}
      </Formik>
      <BottomDataDisplay />
      <ResetButton />
    </Box>
  )
}

export default Form;