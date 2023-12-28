import { useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure
} from '@chakra-ui/react'

const DeleteModal = ({ children, placeholder = "Deletar", onDeleteItem }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  const deleteItem = () => onDeleteItem()

  return (
    <>
      <button onClick={onOpen}>
        {children}
      </button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent m={2} borderRadius='none'>
            <AlertDialogHeader fontSize='lg' fontWeight='semibold'>
              {placeholder}
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja deletar? Você não poderá desfazer essa ação.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='red' ml={3} onClick={deleteItem}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteModal