import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface FetchGameResponse {
    results: Game[];
    count: number;
  }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((err) => {
        if (err.isInstanceOf(CanceledError)) return;
        setError(err);
      });
    return () => controller.abort();
  }, []);
  return {games, error};
}

export default useGames;