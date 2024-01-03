import { useContext, useEffect, useState } from "react"
import { Button, Flex, Icon, Switch, TableContainer } from "@chakra-ui/react"
import { Navigate } from "react-router-dom"
import { LuRotateCw, LuTrash2 } from "react-icons/lu";
import { AuthContext } from "../../contexts/AuthContext";
import {
  deleteSubscription,
  getAll,
  paidSubscription
} from "../../firebase/controllers/subscriptionController";
import Navbar from "../../components/navbar/Navbar";
import { DataTable } from "../../components/DataTable";
import DeleteModal from "../../components/DeleteModal";

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

  const getSubscriptions = async () => {
    await getAll()
      .then(data => {
        setSubscriptions(data)
      })
      .catch(e => console.log('Erro: ', e))
  }

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
      header: "Mét. Pagamento"
    },
    {
      accessorKey: "paid",
      cell: (props) =>
        <Switch colorScheme='teal' size='sm' isChecked={props.getValue()} onChange={() => {
          paidSubscription(props.row.original);
          getSubscriptions()
        }} />,
      header: "Pago",
    },
    {
      header: "Ações",
      cell: (props) =>
        <DeleteModal placeholder={"Deletar inscrição de: " + props.row.original.name} onDeleteItem={() => {
          deleteSubscription(props.row.original);
          getSubscriptions()
        }}>
          <Icon as={LuTrash2} cursor='pointer' color='red.600' boxSize={5} />
        </DeleteModal>
    }
  ]

  if (!authenticated) {
    return (
      <Navigate to='/camping/login' />
    )
  }

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
        px={2}
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
      </Flex>

    </Flex>
  )
}

export default Admin