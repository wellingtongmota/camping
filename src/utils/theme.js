import { extendTheme } from "@chakra-ui/react";
import '@fontsource/anton';
// Supports weights 100-900
import '@fontsource-variable/montserrat';
import '@fontsource/poppins';

const theme = extendTheme({
  components: {
    Heading: {
      // 1. We can update the base styles
      baseStyle: {
        letterSpacing: '0.15rem'
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.700',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
        borderRadius: 'none',
        textTransform: 'uppercase',
        fontFamily: `'Poppins', sans-serif`,
        letterSpacing: '0.05rem',
      },
    },
    Badge: {
      baseStyle: {
        color: 'teal.600',
        bgColor: 'teal.50',
        letterSpacing: '0.05rem',
        borderRadius: 'full',
        paddingInline: [4, 5],
        paddingBlock: [2, 3, 4],
        width: 'fit-content',
        fontFamily: `'Poppins', sans-serif`,
      }
    },
  },
  styles: {
    global: {
      body: {
        // letterSpacing: '0.1rem'
      },
      // styles for the `span`
      span: {
        fontWeight: 'semibold'
      },
    },
  },
  fonts: {
    heading: `'Anton', sans-serif`,
    body: `'Montserrat Variable', sans-serif`,
    button: `'Montserrat Variable', sans-serif`,
    // badge: `'Poppins', sans-serif`,
  },
})

export default theme