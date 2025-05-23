import { Field, useField } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
	Input
} from '@chakra-ui/react'

const TextField = ({ label, type, name, placeholder }) => {
	const [field, meta] = useField({ type, name, placeholder });

	return (
		<FormControl isInvalid={meta.error && meta.touched} mb='6'>
			<FormLabel noOfLines={1}>{label}</FormLabel>
			<Field as={Input} {...field} type={type} name={name} placeholder={placeholder} />
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default TextField;