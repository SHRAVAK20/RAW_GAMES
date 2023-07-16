import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import getPlatform from "../hooks/usePlatform";
import getGenreById from "../hooks/getGenreById";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const getPlatformById = getPlatform(gameQuery.platformId);
  const getGGenereById = getGenreById(gameQuery.genreId);

  const heading = `${getGGenereById?.name || ""} ${
    getPlatformById?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
