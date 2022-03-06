import { Flex, Box, Image, Text, Heading } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px","250px", "250px", "335px"]}
      bgImage="url('/background.jpg')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex 
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box>
          <Heading 
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
            color="gray.100"
            fontWeight="500"
          >
            5 Continentes, < br/> 
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.200"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "540px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>
        <Image 
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src="/airplane.svg"
          alt="Avião amarelo voando entre as nuvens"
          mt="7rem"
        />
      </Flex>
    </Flex>
  );
}