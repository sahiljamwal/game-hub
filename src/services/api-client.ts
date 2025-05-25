import axios, { AxiosRequestConfig } from "axios";

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

class APIClient<T> {
  constructor(private _endpoint: string) {}

  public getAll = (config: AxiosRequestConfig) =>
    apiClient
      .get<FetchResponse<T>>(this._endpoint, config)
      .then((res) => res.data);

  public get = (id: string | number) =>
    apiClient.get<T>(this._endpoint + "/" + id).then((res) => res.data);
}

export default APIClient;
