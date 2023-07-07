import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./compenents/NavBar";
import GameGrid from "./compenents/GameGrid";
import GenereList from "./compenents/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelected from "./compenents/PlatformSelected";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
            <GenereList
              selectedGenre={gameQuery.genre}
              onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main" padding="20px">
          <PlatformSelected
            selectedPlatform={gameQuery.platform}
            onSelect={(platform) => setGameQuery({ ...gameQuery, platform })}
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
