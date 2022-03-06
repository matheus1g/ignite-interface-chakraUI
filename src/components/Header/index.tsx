import { Flex, Grid, Icon, Image} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { RiArrowDropLeftLine } from 'react-icons/Ri'

export function Header() {
  const { asPath } =useRouter();
  const notHomePage = asPath !== "/"
  
  return (
    <Flex 
      px="1rem" 
      w="100%" 
      as="header" 
      mx="auto" 
      h={["50px", "100px"]} 
      align="center"
      justify="center"
    >
      <Grid 
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
      {notHomePage && 
        <Link href="/">
          <a>
            <Icon as={RiArrowDropLeftLine} fontSize={[20, 40]} justifySelf="start"/>
          </a>
        </Link>
      }
        <Image w={["81px","184px"]} m="auto" src="/logo.svg" alt="worldTrip" />
      </Grid>
    </Flex>
  );
}