import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

  interface FetchGameResponse {
    results: Game[];
    count: number;  
  }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] =useState(true);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err.isInstanceOf(CanceledError)) return;
        setError(err);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return {games, error, isLoading};
}

export default useGames;