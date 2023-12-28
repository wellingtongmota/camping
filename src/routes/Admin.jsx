import { Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"
import { getAll } from "../firebase/controllers/subscriptionController"

const Admin = () => {

  const { authenticated } = useContext(AuthContext)
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    getAll()
      .then(data => {
        setSubscriptions(data)
      })
      .catch(e => console.log('Erro: ', e))
  }, [])

  if (!authenticated) {
    return (
      <Navigate to='/camping-fonte/login' />
    )
  }

  const getSubscriptions = async () => {
    await getAll()
      .then(data => {
        setSubscriptions(data)
      })
      .catch(e => console.log('Erro: ', e))
  }

  return (
    <Flex
      flexDirection='column'
      w='full'
      align='center'
      p={2}
    >
      <Flex
        flexDirection='column'
        w='full'
        maxW='6xl'
        // flex={1}
        align='center'
      // border='1px solid'
      >

        <Button
          // type='submit'
          colorScheme='teal'
          // isLoading={isSubmitting}
          loadingText='Atualizando'
          onClick={getSubscriptions}
        >
          Atualizar
        </Button>

        <TableContainer mt={8}>
          <Table variant='simple' size='sm'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>E-mail</Th>
                <Th>Celular</Th>
                <Th>Igreja</Th>
                <Th>Cama / Barraca</Th>
                <Th>Transporte</Th>
                <Th>Met. pagamento</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                subscriptions.map((sub, index) => (
                  <Tr key={index} _hover={{ backgroundColor: 'gray.200' }}>
                    <Td>{sub.name}</Td>
                    <Td>{sub.email}</Td>
                    <Td>{sub.phone}</Td>
                    <Td>{sub.church}</Td>
                    <Td>{sub.ground}</Td>
                    <Td>{sub.transport}</Td>
                    <Td>{sub.payment}</Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  )
}

export default Admin