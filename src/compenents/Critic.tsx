import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const Critic = ({ metacritic }: Props) => {
  const color = metacritic > 95 ? "green" : metacritic > 90 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} marginX="5px" fontSize="15px">
      {metacritic}
    </Badge>
  );
};

export default Critic;
