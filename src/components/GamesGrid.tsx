import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.length > 0 &&
          games.map((game) => (
            <li key={game.id} color="white">
              {game.name}
            </li>
          ))}
      </ul>
    </>
  );
};

export default GamesGrid;
