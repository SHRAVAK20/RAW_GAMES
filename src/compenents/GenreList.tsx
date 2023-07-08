import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenereList = ({ onSelect, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner margin={"50px"} size={"xl"} />;
  return (
    <>
      <Heading fontSize={"3xl"}>Genre</Heading>
      <List paddingY={10}>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                objectFit={"cover"}
                borderRadius={8}
              />
              <Button
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onSelect(genre)}
                fontSize={"xl"}
                as={"b"}
                variant={"link"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenereList;
