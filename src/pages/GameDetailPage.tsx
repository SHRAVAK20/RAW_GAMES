import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../compenents/ExpandableText";
import GameAttributes from "../compenents/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../compenents/GameTrailer";
import GameScreenshots from "../compenents/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
