import { Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
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
        <Flex w='full' flex={1}>
          <Outlet />
        </Flex>
      </Flex>
    </AuthProvider>
  )
}

export default App