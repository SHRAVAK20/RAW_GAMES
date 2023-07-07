
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
    selectedPlatform : Platform| null;
  }


export const useGames = ({selectedGenre, selectedPlatform}: Props) => {
  return useData<Game>("/games", {params: {genres: selectedGenre?.id, platforms : selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]);
}

export default useGames;