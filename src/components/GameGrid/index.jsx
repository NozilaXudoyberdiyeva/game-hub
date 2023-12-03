import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard";
import useGames from "../../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  if (error) return <Text colorScheme="danger">{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding={5}
    >
      {games.length > 0 &&
        games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
