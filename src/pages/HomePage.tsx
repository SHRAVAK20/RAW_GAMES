import { Grid, Show, GridItem, HStack, Box } from "@chakra-ui/react";
import GameGrid from "../compenents/GameGrid";
import GameHeading from "../compenents/GameHeading";
import GenereList from "../compenents/GenreList";
import PlatformSelected from "../compenents/PlatformSelected";
import SortSelector from "../compenents/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" padding="20px" marginX={"5px"}>
          <GenereList />
        </GridItem>
      </Show>
      <GridItem area="main" padding="20px">
        <Box paddingLeft={10}>
          <GameHeading />
          <HStack spacing={5}>
            <PlatformSelected />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
