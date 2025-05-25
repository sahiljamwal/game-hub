import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Expandabletext from "../components/Expandabletext";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner size="xl" />;
  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Expandabletext>{game?.description_raw}</Expandabletext>
      <GameAttributes game={game}></GameAttributes>
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetails;
