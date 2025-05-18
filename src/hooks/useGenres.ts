import { useQuery } from "@tanstack/react-query";
import axiosClient, { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useGenres;
