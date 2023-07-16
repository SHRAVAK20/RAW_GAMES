import useGames from "../hooks/useGames";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatiner from "./GameCardConatiner";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames({
    gameQuery: gameQuery,
  });
  if (error) {
    return <div>{error.message}</div>;
  }
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing="10px">
        {isLoading &&
          skeletons.map((skull) => {
            return (
              <GameCardConatiner key={skull}>
                <GameCardSkeleton />
              </GameCardConatiner>
            );
          })}

        {data?.pages.map((page) => (
          <React.Fragment>
            {page.results.map((game) => {
              return (
                <GameCardConatiner key={game.id}>
                  <GameCard game={game} />
                </GameCardConatiner>
              );
            })}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginX={5}>
          {isFetchingNextPage ? "Loading ..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
