import { Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

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
      <Outlet />
    </Flex>
  )
}

export default App