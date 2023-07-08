import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import styles from "./Main.module.scss";
import PlatformIconList from "./PlatformIconList";
import Critic from "./Critic";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card className={styles.cardss}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <Critic metacritic={game.metacritic} />
        </HStack>
        <Heading size="lg">
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
