import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const firstTrailer = data?.results[0];
  return firstTrailer ? (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
