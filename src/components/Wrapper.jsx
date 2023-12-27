import { Flex, Heading } from '@chakra-ui/react'

const Wrapper = (props) => {
  return (
    <Flex
      w='full'
      flexDirection='column'
      {...props}
    >
      {props.title !== undefined &&
        <Flex justify={props.justify_title}>
          <Heading textTransform='uppercase' color='teal.900' pb={6}>{props.title}</Heading>
        </Flex>
      }

      {props.children}
    </Flex>
  )
}

export default Wrapper