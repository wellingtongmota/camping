import { Flex } from "@chakra-ui/react"
import NextEvent from "../components/NextEvent"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import Activities from "../components/Activities"
import Leisure from "../components/Leisure"
import Questions from "../components/questions/Questions"

const Home = () => {
  return (
    <Flex flexDirection='column' w='full'>
      <Navbar />

      <Flex flexDirection='column' w='full' align='center' mt={8} gap={4} flex={1}>
        <NextEvent maxW='4xl' px={2} />
        <Activities maxW='5xl' px={2} />
        <Leisure maxW='5xl' px={2} />
        <Questions />
      </Flex>

      <Footer />
    </Flex>
  )
}

export default Home