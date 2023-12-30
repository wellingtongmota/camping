import { Avatar, Flex, Heading, Icon, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom'
import { LuFacebook, LuInstagram, LuLayoutDashboard, LuLogIn, LuLogOut, LuMenu } from "react-icons/lu";
import logo from '/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {

  const { authenticated, user, signIn, signOut } = useContext(AuthContext)

  return (
    <Flex
      w='full'
      h='4.4rem'
      bg='teal.900'
      textColor='whiteAlpha.900'
      boxShadow='md'
      align='center'
      justify='space-between'
      px={[2, 4, 6]}
      py={2}
      gap={2}
    >
      <Flex as={RouterLink} to='/camping-fonte' gap={4} align='center'>
        <Image
          boxSize='3.2rem'
          objectFit='cover'
          src={logo}
          alt='Logo do site'
        />
        <Heading>Camping</Heading>
      </Flex>

      <Flex gap={[2, 4, 4]} align='center'>
        <Link href='https://www.instagram.com/atitudepinda' isExternal ><Icon as={LuInstagram} boxSize={8} color='whiteAlpha.700' /></Link>
        <Link href='https://www.facebook.com/atitudepinda' isExternal ><Icon as={LuFacebook} boxSize={8} color='whiteAlpha.700' /></Link>

        <Menu>
          {!authenticated ?
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<LuMenu />}
              variant='link'
              color='whiteAlpha.700'
              fontSize='3xl'
              ml={[0, 4, 4]}
              _active={{ color: 'whiteAlpha.800' }}
            />
            :
            <Avatar size='sm' as={MenuButton} name={user} />
          }
          {!authenticated ?
            <MenuList color='gray.700'>
              <MenuItem icon={<LuLogIn />} onClick={signIn} as={RouterLink} to='/camping-fonte/login'>
                Entrar
              </MenuItem>
            </MenuList>
            :
            <MenuList color='gray.700'>
              <MenuItem icon={<LuLayoutDashboard />} as={RouterLink} to='/camping-fonte/admin'>
                Admin
              </MenuItem>
              <MenuItem icon={<LuLogOut />} onClick={signOut} as={RouterLink} to='/camping-fonte'>
                Sair
              </MenuItem>
            </MenuList>
          }
        </Menu>

      </Flex>
    </Flex>
  )
}

export default Navbar