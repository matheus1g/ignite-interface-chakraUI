import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "400": "#FFBA08",
    },
    gray: {
      "50": "#FFFFFF",
      "100": "#F5F8FA",
      "200": "#DADADA",
      "600": "#999999",
      "800": "#47585B",
      "900": "#000000"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.800'
      }
    },
  },
})