import { Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import AuthProvider from "./contexts/AuthContext"

const App = () => {
  return (
    <AuthProvider>
      <Flex
        flexDirection='column'
        align='center'
        w='full'
        h='100dvh'
        overflowY='auto'
      >
        <Navbar />
        <Flex w='full' flex={1}>
          <Outlet />
        </Flex>
        <Footer />
      </Flex>
    </AuthProvider>
  )
}

export default App