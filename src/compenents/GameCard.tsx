import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import styles from "./Main.module.scss";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card className={styles.card}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading size="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
