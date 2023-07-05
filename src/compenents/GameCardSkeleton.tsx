import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import styles from "./Main.module.scss";

const GameCardSkeleton = () => {
  return (
    <Card className={styles.cardss}>
      <Skeleton height="410px" width="580px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
