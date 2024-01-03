import { useContext, useEffect, useState } from "react"
import { Button, Flex, Icon, Switch, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { Navigate } from "react-router-dom"
import { LuTrash2, LuRotateCw } from "react-icons/lu";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteSubscription, getAll, paidSubscription } from "../../firebase/controllers/subscriptionController";
import DeleteModal from "../../components/DeleteModal";
import Navbar from "../../components/navbar/Navbar";
import { DataTable } from "../../components/DataTable";

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
      <Navigate to='/camping/login' />
    )
  }

  const getSubscriptions = async () => {
    await getAll()
      .then(data => {
        setSubscriptions(data)
      })
      .catch(e => console.log('Erro: ', e))
  }

  // const columnHelper = createColumnHelper()

  const columns = [
    {
      accessorKey: "name",
      cell: (info) => info.getValue(),
      header: "Nome"
    },

    {
      accessorKey: "email",
      cell: (info) => info.getValue(),
      header: "E-mail"
    },

    {
      accessorKey: "phone",
      cell: (info) => info.getValue(),
      header: "Celular"
    },

    {
      accessorKey: "church",
      cell: (info) => info.getValue(),
      header: "Igreja"
    },
    {
      accessorKey: "ground",
      cell: (info) => info.getValue(),
      header: "Cama / Barraca"
    },
    {
      accessorKey: "transport",
      cell: (info) => info.getValue(),
      header: "Transporte"
    },
    {
      accessorKey: "payment",
      cell: (info) => info.getValue(),
      header: "Igreja"
    },
    {
      accessorKey: "paid",
      cell: (info) => info.getValue(),
      header: "Pago"
    },
  ]

  return (
    <Flex
      flexDirection='column'
      w='full'
      align='center'
    >
      <Navbar />
      <Flex
        flexDirection='column'
        w='full'
        maxW='7xl'
        align='center'
        gap={4}
      >

        <Flex w='full' mt={8}>
          <Button
            colorScheme='teal'
            loadingText='Atualizando'
            rightIcon={<LuRotateCw />}
            boxShadow='md'
            onClick={getSubscriptions}
          >
            Atualizar
          </Button>
        </Flex>

        <TableContainer w='full' boxShadow='base'>
          <DataTable columns={columns} data={subscriptions} />
        </TableContainer>

        {/* <TableContainer w='full' boxShadow='base'>
          <Table variant='simple' size='sm'>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>E-mail</Th>
                <Th>Celular</Th>
                <Th>Igreja</Th>
                <Th>Cama / Barraca</Th>
                <Th>Transporte</Th>
                <Th>Met. pagamento</Th>
                <Th>Pago</Th>
                <Th isNumeric pl={4}>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {subscriptions.length !== 0 &&

                subscriptions.map(sub => (
                  <Tr key={sub.id} _hover={{ backgroundColor: 'gray.200' }} bg={sub.paid && 'gray.50'}>
                    <Td>{sub.name}</Td>
                    <Td>{sub.email}</Td>
                    <Td>{sub.phone}</Td>
                    <Td>{sub.church}</Td>
                    <Td>{sub.ground}</Td>
                    <Td>{sub.transport}</Td>
                    <Td>{sub.payment}</Td>
                    <Td><Switch colorScheme='teal' size='sm' isChecked={sub.paid} onChange={() => paidSubscription(sub)} /></Td>
                    <Td textAlign='end'>
                      <Flex gap={2} justify='end'>
                        <DeleteModal placeholder={"Deletar inscrição de: " + sub.name} onDeleteItem={() => deleteSubscription(sub)}>
                          <Icon as={LuTrash2} cursor='pointer' color='red.600' boxSize={5} />
                        </DeleteModal>
                      </Flex>
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer> */}
      </Flex>
    </Flex>
  )
}

export default Admin