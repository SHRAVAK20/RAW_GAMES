import useGenre from "./useGenre";

const getGenreById = (id: number | null) => {
  const { data: genres } = useGenre();
  return genres?.results.find((genre) => {
    return genre.id === id;
  });
};

export default getGenreById;
