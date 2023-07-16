import useGames from "../hooks/useGames";
import { Box, Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatiner from "./GameCardConatiner";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

  const fetchGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
          spacing="10px"
          padding="10px"
        >
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
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginX={5}>
          {isFetchingNextPage ? "Loading ..." : "Load More"}
        </Button>
      )} */}
    </>
  );
};

export default GameGrid;
