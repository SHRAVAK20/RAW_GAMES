import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatforms();

  const getGenre = () => {
    return genres?.results.find((genre) => {
      return genre.id === gameQuery.genreId;
    });
  };

  const getPlatform = () => {
    return platforms?.results.find((platform) => {
      return platform.id === gameQuery.platformId;
    });
  };

  // gameQuery.platform?.name;
  // gameQuery.genre?.name;
  const heading = `${getGenre()?.name || ""} ${
    getPlatform()?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
