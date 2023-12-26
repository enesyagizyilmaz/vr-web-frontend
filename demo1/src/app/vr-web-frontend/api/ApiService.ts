import axios from "axios";

const apiClient = axios.create
(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const signUpApi = (body) =>
{
    return apiClient.post(`/api/v1/users`,body);
};

export const login = (credentials) =>
{
  return apiClient.post("/api/v1/auth",credentials);
};