import useGenre from "../hooks/useGenre";

const GenereList = () => {
  const { data } = useGenre();
  return data.map((genre) => <li key={genre.id}>{genre.name}</li>);
};

export default GenereList;
