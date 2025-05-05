import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data?.length > 0 &&
        data.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  );
};

export default GenreList;
