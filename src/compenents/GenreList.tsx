import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelect: (genre: Genre) => void;
}

const GenereList = ({ onSelect }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner margin={"50px"} size={"xl"} />;
  return data.map((genre) => (
    <List>
      <ListItem key={genre.id}>
        <HStack>
          <Image
            paddingY={"10px"}
            src={getCroppedImageUrl(genre.image_background)}
            boxSize={"80px"}
          />
          <Button
            onClick={() => onSelect(genre)}
            fontSize={"xl"}
            as={"b"}
            variant={"link"}
          >
            {genre.name}
          </Button>
        </HStack>
      </ListItem>
    </List>
  ));
};

export default GenereList;
