
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



export const useGames = () => {
  return useData<Game>("/games");
}

export default useGames;