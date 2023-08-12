import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import styles from "./Main.module.scss";

interface Props {
  children: ReactNode;
}

const GameCardConatiner = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease.in",
      }}
      className={styles.card}
    >
      {children}
    </Box>
  );
};

export default GameCardConatiner;
