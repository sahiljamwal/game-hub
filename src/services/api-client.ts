import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_RAWG_BASE_URL,
  params: { key: import.meta.env.VITE_RAWG_API_KEY },
});

export default apiClient;
