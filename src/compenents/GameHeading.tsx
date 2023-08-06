import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import getPlatform from "../hooks/usePlatform";
import getGenreById from "../hooks/getGenreById";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const getGGenereById = getGenreById(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const getPlatformById = getPlatform(platformId);

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
