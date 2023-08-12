import { Game } from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import Critic from "./Critic";
import DefiitionItem from "./DefiitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" columns={2}>
      <DefiitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefiitionItem>

      <DefiitionItem term="Metascore">
        <Critic metacritic={game.metacritic} />
      </DefiitionItem>

      <DefiitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefiitionItem>

      <DefiitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefiitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
