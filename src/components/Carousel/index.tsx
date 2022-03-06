import { Flex, Text, Box } from "@chakra-ui/react";
import { ContentCarousel } from "./ContentCarousel";

export function Carousel() {
  return (
    <>
      <Text
        fontSize={["lg", "4xl"]}
        color="gray.800"
        justifyContent="center"
        align="center"
        mb={["2", "15"]}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Text>

      <ContentCarousel />
    </>
  );
}