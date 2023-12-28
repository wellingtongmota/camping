import { Button, Flex, Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { LuTrash2 } from "react-icons/lu";
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"
import { getAll } from "../firebase/controllers/subscriptionController"
import DeleteModal from "../components/DeleteModal";

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
      bg='gray.50'
    >
      <Flex
        flexDirection='column'
        w='full'
        maxW='9xl'
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

        <TableContainer mt={8} bg='white'>
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
                <Th isNumeric pl={8}>Ações</Th>
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
                    <Td textAlign='end'>
                      <Flex gap={2} justify='end'>
                        <DeleteModal placeholder={"Deletar inscrição de: " + sub.name} onDeleteItem={() => console.log('delete ', sub.name)}>
                          <Icon as={LuTrash2} cursor='pointer' color='red.600' boxSize={5} />
                        </DeleteModal>
                      </Flex>
                    </Td>
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