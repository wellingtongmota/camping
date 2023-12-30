import { Flex } from "@chakra-ui/react"
import NextEvent from "../components/NextEvent"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <Flex
      flexDirection='column'
      align='center'
      w='full'
      gap={2}
    >
      <Navbar />

      <Flex flexDirection='column' flex={1}>
        <NextEvent maxW='4xl' px={2} />
      </Flex>

      <Footer />
    </Flex>
  )
}

export default Home