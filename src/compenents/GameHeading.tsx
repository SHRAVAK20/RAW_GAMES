import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  gameQuery.platform?.name;
  gameQuery.genre?.name;
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
