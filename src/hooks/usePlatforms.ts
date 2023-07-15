import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";
import apiClient, { FetchResponse } from "../services/api-client";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
  });

  // return useData<Platform>("/platforms/lists/parents");
};
export default usePlatforms;
