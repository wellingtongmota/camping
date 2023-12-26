import { Heading, Link } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

const NavLink = ({ to, children }) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      _activeLink={{ textDecoration: 'underline 2px' }}
      _hover={{ textDecoration: 'underline 2px' }}
    >
      <Heading fontSize={['xl', '2xl','3xl']}>{children}</Heading>
    </Link>
  )
}

export default NavLink
