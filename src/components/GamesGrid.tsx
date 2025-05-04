import { Grid, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {games?.length > 0 &&
          games.map((game) => <GameCard game={game} key={game.id} />)}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
