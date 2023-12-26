import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Flex flexWrap='wrap' h='100dvh' align='center' justify={['space-evenly']} p={4} gap={8}>
      <Flex flexDirection='column' gap={1}>
        <Heading>Página não encontrada...</Heading>
        <Text w={['100%', 'sm', 'md']} as='h2' mt={1}>
          Parece que a página que você está procurando foi movida ou nunca existiu.
          Certifique-se que digitou o endereço corretamente ou seguiu um link válido.
        </Text>

        <Button as={Link} to='/camping-fonte' colorScheme='teal' borderRadius='none' mt={12} textTransform='uppercase' size='lg'>Acessar home</Button>
      </Flex>

      <Box boxSize={['sm', 'lg', 'xl']}>
        <Image src='/error_404_2.svg' />
      </Box>
    </Flex>
  )
}

export default ErrorPage