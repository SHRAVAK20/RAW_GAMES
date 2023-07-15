import { CanceledError, AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface FetchResponse<T> {
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setDatas] = useState<T[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setDatas(response.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err.isInstanceOf(CanceledError)) return;
          setError(err);
          setLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};
export default useData;
