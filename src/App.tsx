import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./compenents/NavBar";
import GameGrid from "./compenents/GameGrid";
import GenereList from "./compenents/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
            <GenereList onSelect={setSelectedGenre} />
          </GridItem>
        </Show>
        <GridItem area="main" padding="20px">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
