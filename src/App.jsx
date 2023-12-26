import { Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <Flex
      flexDirection='column'
      align='center'
      w='full'
      h='100dvh'
      overflowY='auto'
    >
      <Navbar />

      <Flex
        w='full'
        flex={1}
      >
        <Outlet />
      </Flex>

      <Footer />
    </Flex>
  )
}

export default App