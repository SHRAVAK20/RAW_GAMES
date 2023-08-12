import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface Platform {
  name: string;
  id: number;
  slug: string;
}

const apiClient = new APIClient<Game>("/games");

export const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),

    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });

  // return useData<Game>(
  //   "/games",
  //   {
  // params: {
  //   genres: gameQuery.genre?.id,
  //   platforms: gameQuery.platform?.id,
  //   ordering: gameQuery.sortOrder,
  //   search: gameQuery.searchText,
  // },
  //   },
  //   [gameQuery]
  // );
};

export default useGames;
