import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenereList = () => {
  const { data } = useGenre();
  return data.map((genre) => (
    <List>
      <ListItem key={genre.id}>
        <HStack>
          <Image
            paddingY={"5px"}
            src={getCroppedImageUrl(genre.image_background)}
            boxSize={"100px"}
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
