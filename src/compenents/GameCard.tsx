import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import styles from "./Main.module.scss";
import PlatformIconList from "./PlatformIconList";
import Critic from "./Critic";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card className={styles.cardss}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading size="lg">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <Critic metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
