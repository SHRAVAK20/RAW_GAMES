import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id: number;
    name: string;
}
interface FetchGenreResponse {
    results : Genre[]
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] =useState(true);
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenreResponse>("/genres", { signal: controller.signal })
        .then((response) => {
          setGenres(response.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err.isInstanceOf(CanceledError)) return;
          setError(err);
          setLoading(false);
        });
      return () => controller.abort();
    }, []);
    return {genres, error, isLoading};
}
export default useGenre;