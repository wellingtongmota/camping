import { Box, Text, VStack } from '@chakra-ui/react'

const FooterSection = (props) => {
  return (
    <VStack align='flex-start' {...props}>
      <Text color='whiteAlpha.900' textTransform='uppercase'>
        {props.title}
      </Text>
      <Box color='whiteAlpha.700' maxW='xs'>
        {props.children}
      </Box>
    </VStack>
  )
}

export default FooterSection