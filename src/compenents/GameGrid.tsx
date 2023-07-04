import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing="10px"
      >
        {games.map((game) => {
          return <GameCard game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
