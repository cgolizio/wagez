import React from 'react'
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field } from 'formik';

const InputComponent = ({ errors, touched, data }) => {
  const {
    title,
    label,
    type,
    errMsg,
  } = data;

  return (
    <FormControl isInvalid={!!errors.start && touched.start}>
      <FormLabel color='#16161D' htmlFor={title}>{label}</FormLabel>
      <Field
        as={Input}
        id={title}
        name={title}
        type={type}
        bg='#cbcbcb'
        outline='none'
        color='#16161D'
        _focus={{ color: '#f8f8ff', bg: '#736BFB', outline: 'none' }}
        validate={(value) => {
          let error;
          if (!value.length || value.length !== 5) {
            error = errMsg
          }
          return error;
        }}
        isRequired={title === 'hourly' ? false : true}
      />
      <FormErrorMessage>{errMsg}</FormErrorMessage>
    </FormControl>
  )
}

export default InputComponent;