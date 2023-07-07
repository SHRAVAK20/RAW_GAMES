
import { GameQuery } from "../App";
import useData from "./useData";

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
    gameQuery: GameQuery
  }


export const useGames = ({gameQuery}: Props) => {
  return useData<Game>("/games", {params: {genres: gameQuery.genre?.id, platforms : gameQuery.platform?.id}}, [gameQuery]);
}

export default useGames;