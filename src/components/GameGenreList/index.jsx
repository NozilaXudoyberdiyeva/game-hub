import { Text, List, ListItem, HStack, Image, Button } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImage from "../../services/image-url";
const GameGenreList = () => {
  const { genres, error } = useGenres();
  console.log(genres);
  if (error) return <Text>{error}</Text>;
  return (
    <List>
      {genres.length > 0 &&
        genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                width="30px"
                height="30px"
                borderRadius="5px"
                alt={genre.name}
              />
              <Button
                fontSize="lg"
                variant="link"
                textAlign="left"
                whiteSpace="normal"
                mb="15px"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GameGenreList;
