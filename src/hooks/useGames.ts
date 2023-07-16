import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
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

interface Props {
  gameQuery: GameQuery;
}

export const useGames = ({ gameQuery }: Props) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
          },
        })
        .then((res) => res.data),

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
