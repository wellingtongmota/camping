import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'

const ImgDescription = ({ children, image, title }) => {
  return (
    <Card
      direction='column'
      overflow='hidden'
      variant='unstyled'
      borderRadius='none'
      maxW='17rem'
      w='full'
      flexBasis={{ base: '10rem', sm: '10rem', md: '14rem', lg: '16rem' }}
    >
      <Image
        aspectRatio={3 / 4.5}
        objectFit='cover'
        maxW={{ base: '100%' }}
        src={image}
        alt={title}
      />

      <Stack>
        <CardBody px={0} py={4}>
          <Heading
            fontSize={['lg', 'xl', '2xl', '3xl']}
            color='teal.900'
            fontWeight='normal'
            w='full'
            textAlign='center'
            textTransform='uppercase'
          >
            {title}
          </Heading>

          <Text py='2' textAlign='center' fontSize={['sm', 'md']}>
            {children}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default ImgDescription