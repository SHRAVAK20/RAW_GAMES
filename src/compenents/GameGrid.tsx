import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatiner from "./GameCardConatiner";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames({ selectedGenre: selectedGenre });
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
          skeletons.map((skull) => {
            return (
              <GameCardConatiner key={skull}>
                <GameCardSkeleton />
              </GameCardConatiner>
            );
          })}
        {data.map((game) => {
          return (
            <GameCardConatiner key={game.id}>
              <GameCard game={game} />
            </GameCardConatiner>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
