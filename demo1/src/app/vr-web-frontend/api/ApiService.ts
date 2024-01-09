import axios, {AxiosError, AxiosResponse} from "axios";

const apiClient = axios.create
(
    {
        baseURL: 'http://localhost:8080'
    }
);

export interface RequestData<T> {
    successCallback: (response: any) => void
    errorCallback: (error: AxiosResponse | AxiosError | any) => void
    finallyCallback?: () => void
    data?: T
}

export const signUpApi = (body) =>
{
    return apiClient.post(`/api/v1/users`,body);
};

export const login = (credentials) =>
{
  return apiClient.post("/api/v1/auth",credentials);
};
