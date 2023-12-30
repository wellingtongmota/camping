import { Flex, HStack, Heading, Icon, Link, VStack } from '@chakra-ui/react'
import { LuFacebook, LuInstagram } from "react-icons/lu";
import FooterSection from './FooterSection';

const Footer = () => {
  return (
    <Flex
      w='full'
      flexDirection={['column', 'column', 'row']}
      flexWrap='wrap'
      bg='teal.900'
      textColor='gray.50'
      shadow='md'
      p={6}
      gap={[4, 8]}
    >
      <VStack
        color='whiteAlpha.900'
        textTransform='uppercase'
        justify='center'
        align='center'
        flex={1}
        textAlign='center'
      >
        <Heading fontSize='3xl'>Atitude Jovem</Heading>
        <Heading fontSize='xl'>Pindamonhangaba</Heading>
      </VStack>

      <FooterSection title='Endereço' flex={1}>
        Igreja Apostólica Fonte da Vida
        R. Dr. Fontes Júnior, 137
        CEP - 12420-560
        Pindamonhangaba - SP
      </FooterSection>

      <FooterSection title='Contato' flex={1}>
        (12) 98193-9793 <br />
        <Link href='mailto:acamp.atitude.inscricao@gmail.com' isExternal>
          acamp.atitude.inscricao@gmail.com
        </Link>
      </FooterSection>

      <FooterSection title='Mídias sociais' flex={1}>
        <HStack spacing={4}>
          <Link href='https://www.instagram.com/atitudepinda' isExternal ><Icon as={LuInstagram} boxSize={8} color='whiteAlpha.700' /></Link>
          <Link href='https://www.facebook.com/atitudepinda' isExternal ><Icon as={LuFacebook} boxSize={8} color='whiteAlpha.700' /></Link>
        </HStack>
      </FooterSection>

    </Flex>
  )
}

export default Footer