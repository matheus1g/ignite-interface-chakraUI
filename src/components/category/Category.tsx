import { Flex, useBreakpointValue, Image, Text } from "@chakra-ui/react";

interface categoryProps {
  icon: string;
  name: string;
}

export function Category( {icon, name }:categoryProps ) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  })
  
  return (
    <Flex 
      direction={["row", "column"]}
      align="center"
      justify="center"
    >
     { isMobile ?  
      <Image src={`/Icons/${icon}.svg`} alt={`icone de ${icon}`} w="85px" h="85px" mb="6" /> :
      <Text color="yellow.400" fontSize="4xl" mr="2" >•</Text>  
     } 
      <Text
        color="gray.800"
        fontWeight="600"
        fontSize={["lg","2xl"]}
      >
        {name}
      </Text>
    </Flex>
  )
}