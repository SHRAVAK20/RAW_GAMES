import "./App.css";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./compenents/NavBar";
import GameGrid from "./compenents/GameGrid";
import GenereList from "./compenents/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelected from "./compenents/PlatformSelected";
import { Platform } from "./hooks/useGames";
import SortSelector from "./compenents/SortSelector";
import GameHeading from "./compenents/GameHeading";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  sortOrder: string;
  searchText: string | null;
  rating: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

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
    </>
  );
}

export default App;
