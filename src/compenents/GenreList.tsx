import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenereList = () => {
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
          <Text fontSize={"xl"} as={"b"}>
            {genre.name}
          </Text>
        </HStack>
      </ListItem>
    </List>
  ));
};

export default GenereList;
