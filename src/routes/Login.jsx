import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik"
import { useState } from "react";
import { LuLock, LuUser } from "react-icons/lu";
import { BsCapslock } from "react-icons/bs";
import { insertUser } from "../firebase/controllers/userController";

const Login = () => {

  const [capsLockOn, setCapsLockOn] = useState(false);

  const handleKeyUp = e => {
    const capsLockIsOn = e.getModifierState('CapsLock');
    setCapsLockOn(capsLockIsOn);
  }

  return (
    <Formik
      initialValues={{
        user: '',
        password: '',
        checked: []
      }}

      // onSubmit={(values, { setSubmitting }) => {
      //   setTimeout(() => {
      //     alert(JSON.stringify(values, null, 2));
      //     setSubmitting(false);
      //   }, 400);
      // }}

      onSubmit={async (values) => {
        await insertUser(values)
      }}
    >
      {({ isSubmitting }) => (
        <Flex
          w='full'
          justify='center'
          align='center'
        >
          <Card
            m={2}
            w='full'
            maxW='xs'
            h='fit-content'
            as={Form}
            overflowY='auto'
            borderRadius='none'
          >
            <CardHeader>
              <Heading color='gray.700'>Login</Heading>
            </CardHeader>

            <CardBody>
              <Stack spacing={5}>
                <FormControl isRequired>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <LuUser color='gray.300' />
                    </InputLeftElement>
                    <Input
                      as={Field}
                      name="user"
                      type="text"
                      placeholder='Insira o usuário'
                      borderRadius='none'
                      focusBorderColor='teal.400'
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <LuLock color='gray.300' />
                    </InputLeftElement>
                    <Input
                      as={Field}
                      name="password"
                      type="password"
                      placeholder='Insira a senha'
                      borderRadius='none'
                      focusBorderColor='teal.400'
                      onKeyDownCapture={handleKeyUp}
                    />
                    {capsLockOn && (
                      <InputRightElement>
                        <BsCapslock color='gray' />
                      </InputRightElement>
                    )}
                  </InputGroup>
                  {/* {message && <Text mt={1} fontStyle='italic' color='red.500'>{message}</Text>} */}
                </FormControl>

                <Field as={Checkbox} name="checked" value="remember" colorScheme='teal'>
                  Lembrar senha
                </Field>
              </Stack>
            </CardBody>

            <CardFooter
              as={Flex}
              w='full'
              gap={2}
              mt={2}
              flexWrap='wrap'
            >
              <Button
                flex={1}
                flexBasis={130}
                type="reset"
                colorScheme="teal"
                variant='outline'
              >
                Limpar
              </Button>

              <Button
                flex={1}
                flexBasis={130}
                type='submit'
                colorScheme='teal'
                isLoading={isSubmitting}
                loadingText='Entrando'
              >
                Entrar
              </Button>
            </CardFooter>
          </Card>
        </Flex>
      )}
    </Formik>
  )
}

export default Login