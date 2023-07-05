import useGenre from "../hooks/useGenre";

const GenereList = () => {
  const { genres, error, isLoading } = useGenre();
  return genres.map((genere) => <li key={genere.id}>{genere.name}</li>);
};

export default GenereList;
