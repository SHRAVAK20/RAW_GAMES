
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }
  
  export interface Platform {
    name: string;
    id : number;
    slug: string;
  }

  interface Props {
    selectedGenre: Genre | null;
  }


export const useGames = ({selectedGenre}: Props) => {
  return useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);
}

export default useGames;