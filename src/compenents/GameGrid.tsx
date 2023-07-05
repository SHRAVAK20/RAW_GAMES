import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatiner from "./GameCardConatiner";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  if (error) {
    return <div>{error}</div>;
  }
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing="10px"
      >
        {isLoading &&
          skeletons.map(() => {
            return (
              <GameCardConatiner>
                <GameCardSkeleton />
              </GameCardConatiner>
            );
          })}
        {games.map((game) => {
          return (
            <GameCardConatiner>
              <GameCard game={game} />
            </GameCardConatiner>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
