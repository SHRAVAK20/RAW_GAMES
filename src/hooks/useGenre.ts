import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: ms("24h"), //24 hrs
  });

  //return useData<Genre>("/genres");
};
export default useGenre;
