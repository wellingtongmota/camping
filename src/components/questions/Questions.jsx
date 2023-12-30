import { Flex, Heading } from '@chakra-ui/react'
import QuestionsForm from './QuestionsForm'
import bgQuestions from '/bg_questions.jpg'

const Questions = () => {
  return (
    <Flex
      w='full'
      bgImage={bgQuestions}
      bgPosition="center"
      bgSize='cover'
      // objectFit='cover'
      bgRepeat="no-repeat"
      filter='auto' brightness='90%'
      flexDirection='column'
      justify='center'
      align='center'
      py={[2, 4, 8]}
      gap={[2, 4, 6]}
      px={[2, 4]}
    >
      <Heading color='white' textAlign='center'>Alguma dúvida?<br/>Nos envie uma mensagem</Heading>
      <Flex
        bg='whiteAlpha.900'
        maxW='xl'
        w='full'
        flexDirection='column'
        py={[4, 8]}
        px={[4, 6, 8]}
      >
        <QuestionsForm />
      </Flex>
    </Flex>
  )
}

export default Questions