import { Flex } from "@chakra-ui/react"
import NextEvent from "../components/NextEvent"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import Activities from "../components/Activities"

const Home = () => {
  return (
    <Flex flexDirection='column' w='full' gap={2}>
      <Navbar />

      <Flex flexDirection='column' w='full' align='center' gap={4} flex={1}>
        <NextEvent maxW='4xl' px={2} />
        <Activities maxW='5xl' px={2} />
      </Flex>

      <Footer />
    </Flex>
  )
}

export default Home