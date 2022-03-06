import { Grid, GridItem } from "@chakra-ui/react";

import { Category } from './Category';

export function Categories(){
  return (
  <>
    <Grid 
      mt={["10", "32"]}
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", 'repeat(5, 1fr)']} 
      gap={["1", "6"]}
      justifyContent="center"
      alignItems="center"
      mx="auto"
      maxW="1160px"
    >
      <GridItem>
        <Category icon="cocktail" name="vida noturna" />
      </GridItem>
      <GridItem>
        <Category icon="surf" name="praia" />
      </GridItem>
      <GridItem>
        <Category icon="building" name="moderno" />
      </GridItem>
      <GridItem>
        <Category icon="museum" name="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Category icon="earth" name="e mais..." />
      </GridItem>
    </Grid>
  </>
  );
}