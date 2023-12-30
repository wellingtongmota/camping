import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
  useToast
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import QuestionsInput from './QuestionsInput'

const QuestionsForm = () => {

  const toast = useToast()

  const messageServer = (response) => {
    if (response.status === 200) {
      toast({
        title: 'Sucesso',
        description: `Dados enviados!`,
        status: 'success',
        position: 'bottom',
        variant: 'subtle',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: `Erro ${response.status}`,
        description: `Erro ao enviar`,
        status: 'error',
        position: 'bottom',
        variant: 'subtle',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const subscribeSchema = Yup.object().shape({
    name:
      Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!'),
    email:
      Yup.string().
        email('E-mail inválido'),
    message:
      Yup.string()
        .max(1500, 'Muito longo!')
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}

      validationSchema={subscribeSchema}

      onSubmit={async (values, { resetForm }) => {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE_QUESTIONS,
          values,
          import.meta.env.VITE_EMAILJS_KEY
        )
          .then(response => {
            console.log(response.status, response.text)
            resetForm()
            messageServer(response)
          })
          .catch(err => {
            console.log('Erro: ', err)
            messageServer(err)
          })
      }}

    >
      {({ isSubmitting, values, errors, handleChange }) => (
        <Flex
          flexDirection='column'
          as={Form}
        >
          <QuestionsInput
            label='Nome: '
            name='name'
            onChange={handleChange}
            placeholder='Insira seu nome'
            errors={errors.name}
          />

          <QuestionsInput
            label='E-mail: '
            name='email'
            type='email'
            onChange={handleChange}
            placeholder='Insira seu e-mail'
            errors={errors.email}
          />

          <FormControl isRequired>
            <FormLabel letterSpacing='wider' fontFamily={`'Anton', sans-serif`} fontSize='lg'>Mensagem: </FormLabel>
            <Field
              as={Textarea}
              variant='flushed'
              borderBottom='3px solid #2D3748'
              focusBorderColor='teal.400'
              name='message'
              onChange={handleChange}
              placeholder='Insira suas perguntas aqui'
              maxLength={500}
            />
            <FormHelperText textAlign="end">{values.message.length} / 500</FormHelperText>
          </FormControl>

          <Button
            mt={6}
            type='submit'
            letterSpacing='wider'
            colorScheme='teal'
            isLoading={isSubmitting}
            loadingText='Enviando'
          >
            Enviar mensagem
          </Button>
        </Flex>
      )}
    </Formik>
  )
}

export default QuestionsForm