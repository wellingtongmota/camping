import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { Field } from 'formik'

const QuestionsInput = ({ label, name, type = 'text', icon, placeholder, errors, onChange }) => {

  // função handle
  const handleChange = e => onChange(e)

  return (
    <FormControl isRequired>
      {label !== undefined &&
        <FormLabel letterSpacing='wider' fontFamily={`'Anton', sans-serif`} fontSize='lg'>{label}</FormLabel>
      }

      <InputGroup size='md'>
        {icon !== undefined &&
          <InputLeftElement pointerEvents='none' color='gray.600'>
            {icon}
          </InputLeftElement>
        }
        <Input
          as={Field}
          name={name}
          type={type}
          placeholder={placeholder}
          focusBorderColor='teal.400'
          variant='flushed'
          borderBottom='3px solid #2D3748'
          onChange={handleChange}
        />
      </InputGroup>
      {errors ?
        <FormHelperText>{errors}</FormHelperText>
        :
        <FormHelperText><br /></FormHelperText>
      }
    </FormControl>
  )
}

export default QuestionsInput