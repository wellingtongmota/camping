import { Flex } from "@chakra-ui/react"
import NextEvent from "../components/NextEvent"

const Home = () => {
  return (
    <Flex
      flexDirection='column'
      align='center'
      w='full'
      p={2}
    >
      <NextEvent maxW='4xl' />
    </Flex>
  )
}

export default Home