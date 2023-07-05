import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./compenents/NavBar";
import GameGrid from "./compenents/GameGrid";
import GenereList from "./compenents/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" padding="20px">
            <GenereList />
          </GridItem>
        </Show>
        <GridItem area="main" padding="20px">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
