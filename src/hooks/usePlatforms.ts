import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    // staleTime: 24 * 60 * 60 * 1000, //24 hrs
  });

  // return useData<Platform>("/platforms/lists/parents");
};
export default usePlatforms;
