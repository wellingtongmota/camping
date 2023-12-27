import { Avatar, Flex, Icon, Image, Link } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom'
import { LuFacebook, LuInstagram } from "react-icons/lu";
import logo from '/logo.png'
import NavLink from './NavLink'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {

  const { authenticated, user, signIn, signOut } = useContext(AuthContext)

  return (
    <Flex
      w='full'
      h='4.5rem'
      bg='teal.900'
      textColor='whiteAlpha.900'
      boxShadow='lg'
      align='center'
      justify='space-between'
      px={[2, 4, 6]}
      py={2}
      gap={2}
      textTransform='uppercase'
    >
      <Flex gap={4} align='center'>
        <Link as={RouterLink} to='/camping-fonte'>
          <Image
            boxSize='3.2rem'
            objectFit='cover'
            src={logo}
            alt='Logo do site'
          />
        </Link>

        <NavLink to='/camping-fonte'>Camping</NavLink>
      </Flex>

      <Flex gap={4} align='center'>
        <Link href='https://www.instagram.com/atitudepinda' isExternal ><Icon as={LuInstagram} boxSize={8} color='whiteAlpha.700' /></Link>
        <Link href='https://www.facebook.com/atitudepinda' isExternal ><Icon as={LuFacebook} boxSize={8} color='whiteAlpha.700' /></Link>

        {!authenticated ?
          <Link
            as={RouterLink}
            to='/camping-fonte/login'
          >
            {/* <Icon ml={5} as={LuUser2} boxSize={8} onClick={signIn} color='whiteAlpha.700' /> */}
            <Avatar size='sm' colorScheme='gray' onClick={signIn} />
          </Link>  
          :
          // <Text ml={5} color='whiteAlpha.700' onClick={signOut}>SAIR</Text>
          <Avatar size='sm' colorScheme='gray' name={user} onClick={signOut} />
      }
      </Flex>
    </Flex>
  )
}

export default Navbar